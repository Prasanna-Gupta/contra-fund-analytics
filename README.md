# Contra Fund Analytics Dashboard

A modern, interactive analytics dashboard for Contra Mutual Funds featuring exploratory data analysis, ML-powered clustering, and NAV forecasting capabilities.

## Features

- **Dashboard Overview** - Key metrics and performance statistics at a glance
- **Risk-Return Analytics** - Comprehensive EDA showing volatility vs CAGR patterns
- **Smart Clustering** - ML-powered fund grouping based on risk-return characteristics
- **NAV Forecasting** - Predictive models with 95% accuracy for investment planning
- **Actionable Insights** - Data-driven recommendations for investment decisions

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Charts**: Chart.js + react-chartjs-2
- **Routing**: React Router v7
- **Build Tool**: Vite 7

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Prasanna-Gupta/contra-fund-analytics.git
cd contra-fund-analytics
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
contra-fund-analytics/
├── src/
│   ├── components/
│   │   ├── ChartCard.jsx      # Reusable chart container
│   │   └── Navbar.jsx          # Navigation component
│   ├── pages/
│   │   ├── Home.jsx            # Dashboard overview
│   │   ├── EDA.jsx             # Risk-return analytics
│   │   ├── Clustering.jsx      # Fund clustering analysis
│   │   ├── Forecasting.jsx     # NAV predictions
│   │   └── Insights.jsx        # Key insights & recommendations
│   ├── data/
│   │   ├── metrics.json        # Fund performance metrics
│   │   ├── cluster_output.json # Clustering results
│   │   └── forecast_results.json # ML model predictions
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── package.json
└── vite.config.js
```

## Key Metrics

- **Average CAGR**: 15.4%
- **Volatility Range**: 9.5% - 16.3%
- **ML Model Accuracy**: 95% (R² = 0.95)
- **Prediction Error**: RMSE 1.23, MAE 0.98

## Data Structure

### Metrics Data
```json
{
  "scheme_clean": "Fund Name",
  "Volatility": 12.5,
  "CAGR": 15.2
}
```

### Cluster Data
```json
{
  "cluster": 0,
  "scheme_clean": "Fund Name",
  "Volatility": 12.5,
  "CAGR": 15.2,
  "color": "rgba(255, 99, 132, 0.8)"
}
```

### Forecast Data
```json
{
  "scheme": "Fund Name",
  "y_test": [100, 102, 105, ...],
  "y_pred": [100, 101, 104, ...],
  "rmse": 1.23,
  "mae": 0.98,
  "r2": 0.95
}
```

## Deployment

### Vercel
```bash
npm run build
# Deploy the dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from the dist folder
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

**Prasanna Gupta**
- GitHub: [@Prasanna-Gupta](https://github.com/Prasanna-Gupta)

## Acknowledgments

- Built with React and Vite
- Charts powered by Chart.js
- Styled with Tailwind CSS
- Inspired by modern financial platforms like Groww
