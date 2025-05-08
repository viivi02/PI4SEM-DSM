import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

const tempData = [
  { dia: 'Seg', temp: 24 },
  { dia: 'Ter', temp: 26 },
  { dia: 'Qua', temp: 25 },
  { dia: 'Qui', temp: 27 },
  { dia: 'Sex', temp: 28 },
  { dia: 'Sáb', temp: 29 },
  { dia: 'Dom', temp: 26 }
];

const umidData = [
  { dia: 'Sem1', umidade: 60 },
  { dia: 'Sem2', umidade: 62 },
  { dia: 'Sem3', umidade: 59 },
  { dia: 'Sem4', umidade: 58 },
];

function App() {
  return (
    <div className="app-container">
      <div className="header">
  <div className="logo">
    <h1>AirSense Dashboard</h1>
    <p>Monitoramento ambiental em tempo real</p>
  </div>
  <nav className="navbar">
    <ul className="menu">
      <li>
        Dashboard
        <ul className="dropdown-content">
          <li><a href="#">Temperatura</a></li>
          <li><a href="#">Umidade</a></li>
          <li><a href="#">Qualidade do Ar</a></li>
        </ul>
      </li>
      <li>
        Relatórios
        <ul className="dropdown-content">
          <li><a href="#">Semana</a></li>
          <li><a href="#">Mês</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>

      <div className="charts-section">
        <div className="chart-card" id="temperatura">
          <h3>Temperatura (últimos 7 dias)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={tempData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis unit="°C" />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#2a9d8f" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card" id="umidade">
          <h3>Umidade Média (semanal)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={umidData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis unit="%" />
              <Tooltip />
              <Legend />
              <Bar dataKey="umidade" fill="#457b9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid-cards">
        <section className="card" id="temperatura">
          <h2>Temperatura</h2>
          <p className="data">26.4°C</p>
          <p className="status good">Normal</p>
        </section>

        <section className="card" id="umidade">
          <h2>Umidade</h2>
          <p className="data">58%</p>
          <p className="status medium">Moderada</p>
        </section>

        <section className="card" id="qualidade">
          <h2>Qualidade do Ar</h2>
          <p className="data">73 AQI</p>
          <p className="status warning">Atenção para pessoas sensíveis</p>
        </section>
      </div>

      <footer>
        <p>Atualizado em: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  );
}

export default App;
