import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick= {props.onClick}>This div has been clicked {props.clicks} times.</div>
      </header>
    </div>
  );
}

export default App;
