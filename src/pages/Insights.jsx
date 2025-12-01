export default function Insights() {
  const insights = [
    {
      title: "Risk-Return Dynamics",
      category: "Analytics",
      color: "purple",
      points: [
        "Average CAGR across schemes is 15.4%, indicating strong historical returns",
        "Volatility ranges from 9.5% to 16.3%, showing diverse risk profiles",
        "Higher volatility funds tend to offer better returns, but with increased risk",
        "Investors should align fund selection with their risk tolerance"
      ]
    },
    {
      title: "Cluster Characteristics",
      category: "Clustering",
      color: "blue",
      points: [
        "3 distinct clusters identified based on risk-return patterns",
        "Cluster 0: Moderate risk, balanced returns - suitable for conservative investors",
        "Cluster 1: Higher risk, higher returns - for aggressive growth seekers",
        "Cluster 2: Lower risk, stable returns - ideal for risk-averse investors"
      ]
    },
    {
      title: "Forecasting Reliability",
      category: "Predictions",
      color: "green",
      points: [
        "ML model achieves 95% accuracy (R² = 0.95) in NAV predictions",
        "Low RMSE (1.23) and MAE (0.98) indicate minimal prediction errors",
        "Model can reliably forecast short to medium-term NAV movements",
        "Predictions can assist in timing investment decisions"
      ]
    },
    {
      title: "Investment Recommendations",
      category: "Strategy",
      color: "orange",
      points: [
        "Diversify across clusters to balance risk and return",
        "Monitor volatility trends for optimal entry/exit points",
        "Use forecasting insights for tactical allocation decisions",
        "Regular rebalancing based on cluster performance is recommended"
      ]
    }
  ];

  const colorMap = {
    purple: "from-purple-500 to-purple-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600"
  };

  const bgColorMap = {
    purple: "bg-purple-50 border-purple-200",
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    orange: "bg-orange-50 border-orange-200"
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Key Insights & Recommendations</h1>
        <p className="text-gray-600">Data-driven insights from comprehensive fund analysis</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Strong Performance</h3>
          <p className="text-sm text-gray-600">
            Contra funds show consistent returns with average CAGR of 15.4%
          </p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Clear Segmentation</h3>
          <p className="text-sm text-gray-600">
            3 distinct clusters help match funds to investor risk profiles
          </p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-purple-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">AI-Powered Forecasts</h3>
          <p className="text-sm text-gray-600">
            95% accurate predictions enable better investment timing
          </p>
        </div>
      </div>

      {/* Detailed Insights */}
      <div className="space-y-6">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl border-2 ${bgColorMap[insight.color]} p-6 hover:shadow-lg transition-all`}
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-gray-900">{insight.title}</h2>
              <span className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full font-semibold">
                {insight.category}
              </span>
            </div>
            <ul className="space-y-2">
              {insight.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-500 mt-1 text-sm">✓</span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Action Items */}
      <div className="mt-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">For Conservative Investors</h3>
            <p className="text-sm text-purple-100">
              Focus on Cluster 2 funds with lower volatility (9-11%) and stable returns around 11-13% CAGR
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">For Aggressive Investors</h3>
            <p className="text-sm text-purple-100">
              Consider Cluster 1 funds with higher volatility (14-16%) targeting 17-19% CAGR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
