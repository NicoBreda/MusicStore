import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/Navbar/ItemListContainer.js/ItemListContainer';

function App() {
  return (
    <div className="App">
      <ItemListContainer greeting={'BIENVENIDO'}/>
      <header className="App-header">
        <Navbar />
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
