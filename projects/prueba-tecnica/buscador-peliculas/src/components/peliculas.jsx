function ListaPeliculas({peliculas}){
    return (
    <ul>
      {peliculas.map((pelicula) => (
        <li key={pelicula.imdbID}>
          <h3>{pelicula.Title}</h3>
          <p>{pelicula.Year}</p>
          <img src={pelicula.Poster} alt={pelicula.Title} />
        </li>
      ) )}
    </ul>
    )
    
}

function SinRespuesta(){
    return(
        <p>No se encontraron peliculas</p>
    )
}

export function Peliculas({peliculas}){
    
    const tienePeliculas = peliculas?.length > 0;
    return(
        tienePeliculas
        ? <ListaPeliculas peliculas={peliculas}/>
        
        : <SinRespuesta/>
    )
}