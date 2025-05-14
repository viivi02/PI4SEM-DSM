import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const tempData = [
  { dia: 'Seg', temp: 24 },
  { dia: 'Ter', temp: 26 },
  { dia: 'Qua', temp: 25 },
  { dia: 'Qui', temp: 27 },
  { dia: 'Sex', temp: 28 },
  { dia: 'Sáb', temp: 29 },
  { dia: 'Dom', temp: 26 }
];

export default function Temperatura() {
  const Navigate = useNavigate();
  return (
    <div className="app-container" style={{ width: '100%', height: '100vh' }}>
        <div className="header">
        <div className="logo">
          <img width="80" loading="lazy" alt="" src="/imgs/Airsenseicon.png" onClick={()=> Navigate('/')} style={{ cursor: 'pointer' }}></img>
        </div>
        <nav className="navbar">
          <button className="menu-toggle" onClick={() => {
            document.querySelector('.menu').classList.toggle('active');
          }}>
            ☰
          </button>
          <ul className="menu">
            <li>
              Dashboard ⮛
              <ul className="dropdown-content">
                <li><a href="/temperatura">Temperatura</a></li>
                <li><a href="/umidade-qualidade">Umidade/Qualidade Ar</a></li>
              </ul>
            </li>
            <li>
              Relatórios ⮛
              <ul className="dropdown-content">
                <li><a href="#">Semana</a></li>
                <li><a href="#">Mês</a></li>
              </ul>
            </li>
            <li>
              Desenvolvedores ⮛
              <ul className="dropdown-content">
                <li><a href="https://www.linkedin.com/in/ramon-franco-155350227/">Ramon Franco</a></li>
                <li><a href="https://www.linkedin.com/in/patrícia-nogueira-dias-736146112/">Patrícia Nogueira</a></li>
                <li><a href="https://www.linkedin.com/in/vini-lemes/">Vinicius Lemes</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
        <div className="chart-card" style={{ marginTop: '1rem',maxWidth: '80%', height: '80%', margin: 'auto' }}>
        <h3>Temperatura (últimos 7 dias)</h3>
        <ResponsiveContainer width="100%" height={450}>
            <LineChart data={tempData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis unit="°C" />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#e76f51" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  );
}
