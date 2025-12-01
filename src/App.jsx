import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EDA from "./pages/EDA";
import Clustering from "./pages/Clustering";
import Forecasting from "./pages/Forecasting";
import Insights from "./pages/Insights";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eda" element={<EDA />} />
        <Route path="/clustering" element={<Clustering />} />
        <Route path="/forecasting" element={<Forecasting />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
}
