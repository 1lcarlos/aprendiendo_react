import repuestaPeliculas from "../mocks/resultados.json";
import sinRespuesta from "../mocks/sinResultados.json";

export function usePeliculas(){
    const peliculas = repuestaPeliculas.Search;
    const mapeoPeliculas = peliculas?.map (pelicula =>({
        id: pelicula.imdbID,
        title: pelicula.Title,
        year: pelicula.Year,
        image: pelicula.Poster
    }))
    return{peliculas:mapeoPeliculas}
}
