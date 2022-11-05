//import logo from './logo.svg';
import './App.css';
import {getStadioane} from './Controlere/StadiumController'
import {NavLink} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={prodanca} className="App-logo" alt="logo" /> */}

        <p>
         Best Proiect - CSA FC 341 
        </p>
        
        <br></br>
        <button onClick={getStadioane} id="button">Testare StadiumController</button>
        <br></br>
        <NavLink to="/tostadion">Du-ma la stadion</NavLink>
        {/* <br></br>
        <button onClick={getPrimele3Meciuri} id="button">Afiseaza primele 3 meciuri din lista</button> */}
      </header>
    </div>
  );
}

export default App;
