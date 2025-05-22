import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './Dashboard.jsx';
import Temperatura from './Temperatura.jsx';
import UmidadeQualidade from './QualidadeAr.jsx';
import Login from './Login.jsx';
import Cadastro from './Cadastro.jsx';
import { AuthProvider } from './AuthContext.jsx';
import PrivateRoute from './PrivateRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            }
          />
          <Route
            path="/temperatura"
            element={
              <PrivateRoute>
                <Temperatura />
              </PrivateRoute>
            }
          />
          <Route
            path="/umiqualidade"
            element={
              <PrivateRoute>
                <UmidadeQualidade />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
