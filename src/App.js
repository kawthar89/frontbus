
import './App.css';
import Acceuil from './Component/Acceuil';
import Navbar from './Component/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Acceuil />
      </header>
    </div>
  );
}

export default App;
