import "./App.css";
import { usePeliculas } from "./hooks/usePeliculas.js";
import { Peliculas } from "./components/peliculas.jsx";

function App() {
  const { peliculas: mapeoPeliculas } = usePeliculas();

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
        <Peliculas peliculas={mapeoPeliculas} />
      </main>
    </div>
  );
}
export default App;
