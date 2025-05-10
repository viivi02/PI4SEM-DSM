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
          <img width="80" loading="lazy" alt="" src="Airsenseicon.png" class="nav_brand_main-logo-bg"></img>
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
                <li><a href="#">Temperatura</a></li>
                <li><a href="#">Umidade</a></li>
                <li><a href="#">Qualidade do Ar</a></li>
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
        <section className="card" id="card-temperatura">
          <h2>Temperatura</h2>
          <p className="data">26.4°C</p>
          <p className="status good">Normal</p>
        </section>

        <section className="card" id="card-umidade">
          <h2>Umidade</h2>
          <p className="data">58%</p>
          <p className="status medium">Moderada</p>
        </section>

        <section className="card" id="card-qualidade">
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
