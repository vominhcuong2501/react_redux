import logo from './logo.svg';
import './App.css';
import BaiTapOanTuXi from './Component/BaiTapOanTuXi/BaiTapOanTuXi';
import Parent from './Lifecycle/Demo/Parent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <BaiTapOanTuXi /> */}
      <Parent />
    </div>
  );
}

export default App;
