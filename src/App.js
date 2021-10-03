import './App.css';
import Listing from './components/Listing';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
}

export default App;
