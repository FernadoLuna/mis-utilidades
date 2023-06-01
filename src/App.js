import React from "react";
//librerias
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//componentes de dashboard
import Header from "./dashboard/Header";
import Footer from "./dashboard/Footer";
//componentes generales
import UtilsGrid from "./components/home/UtilsGrid";
//views
import QR from "./views/qr";
import BARCODE from "./views/barcode";
import PNGWEBP from "./views/pngwebp";
export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/qr-generator" element={<QR />} />
          <Route path="/barcode-generator" element={<BARCODE />} />
          <Route path="/" element={<PNGWEBP />} />
        </Routes>
        <UtilsGrid />
      </div>
      <Footer />
    </Router>
  );
}
