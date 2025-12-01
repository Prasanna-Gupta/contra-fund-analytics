import ChartCard from "../components/ChartCard";
import clusters from "../data/cluster_output.json";
import { Scatter } from "react-chartjs-2";

export default function Clustering() {
  const clusterGroups = clusters.reduce((acc, item) => {
    if (!acc[item.cluster]) acc[item.cluster] = [];
    acc[item.cluster].push(item);
    return acc;
  }, {});

  const scatterData = {
    datasets: Object.entries(clusterGroups).map(([clusterId, items]) => ({
      label: `Cluster ${clusterId}`,
      data: items.map(item => ({ x: item.Volatility, y: item.CAGR })),
      backgroundColor: items[0].color || "rgba(75,192,192,0.8)",
      pointRadius: 12,
      pointHoverRadius: 15,
      borderWidth: 2,
      borderColor: '#fff',
    }))
  };

  const scatterOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 13, weight: '600' }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context) => {
            const item = clusters[context.dataIndex];
            return [
              `Volatility: ${context.parsed.x}%`,
              `CAGR: ${context.parsed.y}%`,
            ];
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Volatility (%)',
          font: { size: 14, weight: 'bold' }
        },
        grid: { color: 'rgba(0, 0, 0, 0.05)' }
      },
      y: {
        title: {
          display: true,
          text: 'CAGR (%)',
          font: { size: 14, weight: 'bold' }
        },
        grid: { color: 'rgba(0, 0, 0, 0.05)' }
      }
    }
  };

  const clusterStats = Object.entries(clusterGroups).map(([id, items]) => ({
    id,
    count: items.length,
    avgCAGR: (items.reduce((sum, i) => sum + i.CAGR, 0) / items.length).toFixed(2),
    avgVol: (items.reduce((sum, i) => sum + i.Volatility, 0) / items.length).toFixed(2),
    color: items[0].color,
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fund Clustering Analysis</h1>
        <p className="text-gray-600">ML-powered grouping based on risk-return characteristics</p>
      </div>

      {/* Cluster Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {clusterStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: stat.color }}
              />
              <h3 className="text-lg font-bold text-gray-900">
                Cluster {stat.id}
              </h3>
              <span className="ml-auto text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold">
                {stat.count} funds
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Avg CAGR</p>
                <p className="text-xl font-bold text-gray-900">{stat.avgCAGR}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Avg Volatility</p>
                <p className="text-xl font-bold text-gray-900">{stat.avgVol}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scatter Plot */}
      <ChartCard 
        title="Cluster Distribution" 
        subtitle="Scatter plot showing fund groupings by risk and return"
        badge="ML Powered"
      >
        <div style={{ height: '500px' }}>
          <Scatter data={scatterData} options={scatterOptions} />
        </div>
      </ChartCard>

      {/* Fund List */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Fund Details by Cluster</h3>
        <div className="space-y-3">
          {clusters.map((fund, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: fund.color }}
                />
                <span className="font-medium text-gray-900">{fund.scheme_clean}</span>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  Cluster {fund.cluster}
                </span>
              </div>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-gray-500">CAGR: </span>
                  <span className="font-semibold text-green-600">{fund.CAGR}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Vol: </span>
                  <span className="font-semibold text-blue-600">{fund.Volatility}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
