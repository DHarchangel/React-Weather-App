import './App.css';
import Forecast from './Forecast';
import Header from './Header';
import Search from './Search';
import Temperature from './Temperature';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Header />
          <Search />
          <Temperature />
          <Forecast />
          <p><a href="https://github.com/DHarchangel/React-Weather-App" target='_blank' rel="noreferrer">Open Source App </a> Build by Angel</p>
        </div>
      </div>
    </div>
  );
}

export default App;
