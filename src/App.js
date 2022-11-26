import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1>Weather Search Engine</h1>
          <Search />
          <p><a href="https://github.com/DHarchangel/React-Weather-App" target='_blank'>Open Source App </a> Build by Angel</p>
        </div>
      </div>
    </div>
  );
}

export default App;
