import './../styles/App.css';

import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <Banner /><Cart /><ShoppingList />
    </div>
  )

  
  /*
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
  */
  
}

export default App;
