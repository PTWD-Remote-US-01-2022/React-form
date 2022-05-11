import AddMovieForm from "./AddMovieForm";
import { useState } from "react";

const MovieList = () => {
  const data = [
    {
      id: '1a',
      movieName: 'Ironman',
      year: 2008,
      wonOscar: false,
      genre: 'Action',
    },
    {
      id: '1b',
      movieName: 'Batman',
      year: 2006,
      wonOscar: true,
      genre: 'Action',
    },
    {
      id: '1c',
      movieName: 'Harry Potter',
      year: 2001,
      wonOscar: false,
      genre: 'Fantasy',
    },
    ];
    
    const [allMovies, setAllMovies] = useState(data)

  return (
    <div>
          <h2>Movie List</h2>
          <hr />
          <AddMovieForm movies={allMovies} setAllMovies={setAllMovies}/>

      <ul style={{ textAlign: 'left' }}>
        {allMovies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.movieName}({movie.year}) - {movie.genre} -{' '}
              {movie.wonOscar ? 'Oscar' : 'No Oscar'}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;
