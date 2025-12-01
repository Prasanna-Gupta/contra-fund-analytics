import ChartCard from "../components/ChartCard";
import forecast from "../data/forecast_results.json";
import { Line } from "react-chartjs-2";

export default function Forecasting() {
  const labels = forecast.y_test.map((_, i) => `Day ${i + 1}`);

  const chartOptions = {
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
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'NAV Value',
          font: { size: 14, weight: 'bold' }
        },
        grid: { color: 'rgba(0, 0, 0, 0.05)' }
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } }
      }
    }
  };

  const accuracy = (forecast.r2 * 100).toFixed(1);
  const errorRate = ((1 - forecast.r2) * 100).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">NAV Forecasting</h1>
        <p className="text-gray-600">Machine learning predictions for {forecast.scheme}</p>
      </div>

      {/* Model Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <p className="text-green-100 text-sm mb-1">Model Accuracy</p>
          <p className="text-3xl font-bold">{accuracy}%</p>
          <p className="text-xs text-green-100 mt-2">R² Score: {forecast.r2}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <p className="text-blue-100 text-sm mb-1">RMSE</p>
          <p className="text-3xl font-bold">{forecast.rmse}</p>
          <p className="text-xs text-blue-100 mt-2">Root Mean Square Error</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <p className="text-purple-100 text-sm mb-1">MAE</p>
          <p className="text-3xl font-bold">{forecast.mae}</p>
          <p className="text-xs text-purple-100 mt-2">Mean Absolute Error</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <p className="text-orange-100 text-sm mb-1">Error Rate</p>
          <p className="text-3xl font-bold">{errorRate}%</p>
          <p className="text-xs text-orange-100 mt-2">Prediction Variance</p>
        </div>
      </div>

      {/* Forecast Chart */}
      <ChartCard 
        title="Actual vs Predicted NAV" 
        subtitle="Time series comparison of model predictions against actual values"
        badge="ML Model"
      >
        <div style={{ height: '450px' }}>
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "Actual NAV",
                  data: forecast.y_test,
                  borderColor: "rgb(59, 130, 246)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderWidth: 3,
                  tension: 0.4,
                  fill: true,
                  pointRadius: 5,
                  pointHoverRadius: 7,
                  pointBackgroundColor: "rgb(59, 130, 246)",
                },
                {
                  label: "Predicted NAV",
                  data: forecast.y_pred,
                  borderColor: "rgb(168, 85, 247)",
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                  borderWidth: 3,
                  tension: 0.4,
                  fill: true,
                  pointRadius: 5,
                  pointHoverRadius: 7,
                  pointBackgroundColor: "rgb(168, 85, 247)",
                  borderDash: [5, 5],
                }
              ],
            }}
            options={chartOptions}
          />
        </div>
      </ChartCard>

      {/* Model Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Model Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Prediction Accuracy</span>
              <span className="font-bold text-green-600">{accuracy}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${accuracy}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              The model demonstrates strong predictive capability with an R² score of {forecast.r2}, 
              indicating reliable forecasts for investment planning.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Error Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">RMSE</span>
                <span className="text-sm font-semibold text-gray-900">{forecast.rmse}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">MAE</span>
                <span className="text-sm font-semibold text-gray-900">{forecast.mae}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Low error metrics indicate minimal deviation between predicted and actual values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
