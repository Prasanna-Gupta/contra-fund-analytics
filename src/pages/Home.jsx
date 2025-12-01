export default function Home() {
  const stats = [
    { label: "Total Schemes", value: "5", change: "+2.5%", positive: true },
    { label: "Avg CAGR", value: "15.4%", change: "+1.2%", positive: true },
    { label: "Avg Volatility", value: "12.7%", change: "-0.8%", positive: true },
    { label: "Model Accuracy", value: "95%", change: "+3.1%", positive: true },
  ];

  const features = [
    {
      title: "Risk-Return Analysis",
      description: "Comprehensive EDA showing volatility vs CAGR patterns across schemes",
      color: "border-purple-200 hover:border-purple-400",
    },
    {
      title: "Smart Clustering",
      description: "ML-powered grouping of funds based on performance characteristics",
      color: "border-blue-200 hover:border-blue-400",
    },
    {
      title: "NAV Forecasting",
      description: "Predictive models for future NAV with high accuracy metrics",
      color: "border-green-200 hover:border-green-400",
    },
    {
      title: "Actionable Insights",
      description: "Data-driven recommendations for investment decisions",
      color: "border-orange-200 hover:border-orange-400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Contra Fund Analytics
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Advanced analytics platform for Contra Mutual Funds. Explore risk-return patterns, 
            discover fund clusters, and leverage ML forecasting for smarter investment decisions.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <span
                className={`text-sm font-semibold ${
                  stat.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 ${feature.color} p-6 hover:shadow-lg transition-all`}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
