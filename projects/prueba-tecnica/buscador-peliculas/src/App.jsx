import "./App.css";
import repuestaPeliculas from "./mocks/resultados.json";
import sinRespuesta from "./mocks/sinResultados.json";

function App() {
  const peliculas = repuestaPeliculas.Search;
  const tienePeliculas = peliculas?.length > 0;
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
        {tienePeliculas ? (
          <ul>
            {peliculas.map((pelicula) => (
              <li key={pelicula.imdbID}>
                <h3>{pelicula.Title}</h3>
                <p>{pelicula.Year}</p>
                <img src={pelicula.Poster} alt={pelicula.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron peliculas</p>
        )}
      </main>
    </div>
  );
}
export default App;
