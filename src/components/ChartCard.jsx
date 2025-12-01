export default function ChartCard({ title, subtitle, children, badge }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            {badge && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
