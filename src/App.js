
import './App.css';
import Acceuil from './Component/Acceuil';
import Navbar from './Component/Navbar';
import Reservation from './Component/Reservation';
import SeConnecter from './Component/SeConnecter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Acceuil />
       <SeConnecter />
       <Reservation />
      </header>
    </div>
  );
}

export default App;
