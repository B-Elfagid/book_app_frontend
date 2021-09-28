
import logo from './logo.svg';
import './App.css';
import Book from './Book';
function App() {

   const read = {title: "Born a crime", author: "Trevor Noah"}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  
        <Book {...read} />
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
