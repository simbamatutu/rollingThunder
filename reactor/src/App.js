
import './App.css';
import Quotecontainer from './components/Quotecontainer';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>app</h1> 
        <Quotecontainer />
        <Quote />
      </header>
    </div>
  );
}

export default App;
