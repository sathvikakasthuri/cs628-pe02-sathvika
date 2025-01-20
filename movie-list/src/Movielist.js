import React, { useState } from 'react';
import './Movielist.css'; // Styling file

const MovieList = () => {
  // Initial movie data
  const movies = [
    { title: 'Avatar', genre: 'Sci-Fi', year: 2009 },
    { title: 'La La Land', genre: 'Musical', year: 2016 },
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 },
  ];

  // State variables
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [visibleMovies, setVisibleMovies] = useState(movies);

  // Handle dropdown changes
  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);

    // Filter movies based on selection
    if (genre === 'All') {
      setVisibleMovies(movies);
    } else {
      setVisibleMovies(movies.filter((movie) => movie.genre === genre));
    }
  };

  // Click event for each movie
  const showMovieTitle = (movieTitle) => {
    alert(`Selected Movie: ${movieTitle}`);
  };

  // Extract unique genres for dropdown
  const genres = ['All', ...new Set(movies.map((movie) => movie.genre))];

  return (
    <div className="movie-container">
      <h2>Explore Movies</h2>
      
      {/* Dropdown for genre selection */}
      <label htmlFor="genreFilter">Filter by Genre: </label>
      <select id="genreFilter" value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Display movies */}
      <div className="movie-grid">
        {visibleMovies.map((movie) => (
          <div
            key={movie.title}
            className="movie-card"
            onClick={() => showMovieTitle(movie.title)}
          >
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Released: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
