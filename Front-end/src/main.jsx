import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Dashboard.jsx';
import Temperatura from './Temperatura.jsx';
import UmidadeQualidade from './QualidadeAr.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/temperatura" element={<Temperatura />} />
        <Route path="/umidade-qualidade" element={<UmidadeQualidade />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
