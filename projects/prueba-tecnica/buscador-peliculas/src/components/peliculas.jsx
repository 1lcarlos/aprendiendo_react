function ListaPeliculas({ peliculas }) {
  return (
    <ul>
      {peliculas.map((pelicula) => (
        <li key={pelicula.id}>
          <h3>{pelicula.title}</h3>
          <p>{pelicula.year}</p>
          <img src={pelicula.image} alt={pelicula.Title} />
        </li>
      ))}
    </ul>
  );
}

function SinRespuesta() {
  return <p>No se encontraron peliculas</p>;
}

export function Peliculas({ peliculas }) {
  const tienePeliculas = peliculas?.length > 0;
 
  return tienePeliculas ? (
    <ListaPeliculas peliculas={peliculas} />
  ) : (
    <SinRespuesta />
  );
}
