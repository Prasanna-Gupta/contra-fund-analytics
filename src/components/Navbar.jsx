import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/eda", label: "Analytics" },
    { path: "/clustering", label: "Clusters" },
    { path: "/forecasting", label: "Forecast" },
    { path: "/insights", label: "Insights" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ContraFund
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
              Analytics
            </span>
          </div>
          
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
