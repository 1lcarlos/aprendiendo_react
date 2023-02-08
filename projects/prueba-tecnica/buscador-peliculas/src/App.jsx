import "./App.css";
import repuestaPeliculas from "./mocks/resultados.json";
import sinRespuesta from "./mocks/sinResultados.json";
import { Peliculas } from "./components/peliculas.jsx";

function App() {
  const peliculas = repuestaPeliculas.Search;
  
  return (
    <div className="page">
      <header>
        <h1>Prueba Tecnica</h1>
        <form className="form" action="">
          <input type="text" placeholder="Avenges, Star Wars, Batman...." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Peliculas peliculas ={peliculas}/>
      </main>
    </div>
  );
}
export default App;
