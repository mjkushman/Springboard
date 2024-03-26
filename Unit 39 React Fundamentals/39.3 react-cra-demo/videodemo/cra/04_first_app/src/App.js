import logo from './logo.svg';
import './App.css';
import { add, multiply } from "./helpers";
import cats, { meow } from "./cats";

function App() {
  console.log(add(1, 2));
  console.log(cats);
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
