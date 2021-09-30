
import logo from './logo.svg';
import './App.css';
import Book from './Book';
function App() {

   const books = [{image: "https://www.amazon.co.uk/images/I/6133MCTwt5L.jpg", title: "Born a crime", author: "Trevor Noah", likes: "8"}, {image: "https://www.amazon.co.uk/images/I/517pfctTa9L.jpg", title: "The Alchemist", author: "Paulo Coelho", likes: "6"}]
    const booksLis = books.map((books, i) => <li key={i}>{books.title}</li>)
    const bookComponents = books.map((books, i) => <li key={i}><Book {...books}/></li>)
  return (
    <div className="App">
      <header className="App-header">
      <h1>Books</h1>
        <img src={logo} className="App-logo" alt="logo" />
  
        {bookComponents}
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
