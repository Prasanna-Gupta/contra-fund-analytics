import { Line, Bar } from "react-chartjs-2";
import ChartCard from "../components/ChartCard";
import metrics from "../data/metrics.json";

export default function EDA() {
  const vol = metrics.map(m => m.Volatility);
  const cagr = metrics.map(m => m.CAGR);
  const names = metrics.map(m => m.scheme_clean);

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { size: 12, weight: '600' }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        cornerRadius: 8,
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: { font: { size: 11 } }
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } }
      }
    }
  };

  const avgCAGR = (cagr.reduce((a, b) => a + b, 0) / cagr.length).toFixed(2);
  const avgVol = (vol.reduce((a, b) => a + b, 0) / vol.length).toFixed(2);
  const maxCAGR = Math.max(...cagr).toFixed(2);
  const minVol = Math.min(...vol).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Risk-Return Analytics</h1>
        <p className="text-gray-600">Comprehensive analysis of volatility and CAGR across schemes</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <p className="text-purple-100 text-sm mb-1">Average CAGR</p>
          <p className="text-3xl font-bold">{avgCAGR}%</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <p className="text-blue-100 text-sm mb-1">Average Volatility</p>
          <p className="text-3xl font-bold">{avgVol}%</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <p className="text-green-100 text-sm mb-1">Best CAGR</p>
          <p className="text-3xl font-bold">{maxCAGR}%</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <p className="text-orange-100 text-sm mb-1">Lowest Risk</p>
          <p className="text-3xl font-bold">{minVol}%</p>
        </div>
      </div>

      {/* Charts */}
      <ChartCard 
        title="Risk vs Return Comparison" 
        subtitle="Volatility and CAGR trends across all schemes"
        badge="Live Data"
      >
        <div style={{ height: '400px' }}>
          <Line
            data={{
              labels: names,
              datasets: [
                {
                  label: "Volatility (%)",
                  data: vol,
                  borderColor: "rgb(59, 130, 246)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderWidth: 3,
                  tension: 0.4,
                  fill: true,
                  pointRadius: 5,
                  pointHoverRadius: 7,
                },
                {
                  label: "CAGR (%)",
                  data: cagr,
                  borderColor: "rgb(168, 85, 247)",
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                  borderWidth: 3,
                  tension: 0.4,
                  fill: true,
                  pointRadius: 5,
                  pointHoverRadius: 7,
                },
              ],
            }}
            options={lineChartOptions}
          />
        </div>
      </ChartCard>

      <ChartCard 
        title="Performance Distribution" 
        subtitle="Comparative view of returns across schemes"
      >
        <div style={{ height: '350px' }}>
          <Bar
            data={{
              labels: names,
              datasets: [
                {
                  label: "CAGR (%)",
                  data: cagr,
                  backgroundColor: cagr.map(val => 
                    val > avgCAGR ? 'rgba(34, 197, 94, 0.8)' : 'rgba(239, 68, 68, 0.8)'
                  ),
                  borderRadius: 8,
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              ...lineChartOptions,
              plugins: {
                ...lineChartOptions.plugins,
                legend: { display: false }
              }
            }}
          />
        </div>
      </ChartCard>
    </div>
  );
}