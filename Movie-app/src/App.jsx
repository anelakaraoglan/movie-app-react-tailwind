import { useState } from "react";
import "./style.css";

const App = () => {

  const [newMovie, setNewMovie] = useState("");
  // creating a state to hold the new movie input value
  const [movies, setMovies] = useState([]);
  // creating a state to hold the list of movies

  function handleSubmit (e) {
    e.preventDefault();
    // prevent refresh on form submit

    setMovies ((m) => [...m, {id :Date.now(), title: newMovie}]);
    // add new movie to the movies list with a unique id

    setNewMovie("");
    // clear the input field after adding the movie
  };

  function deleteMovie (id) {
    setMovies((m) => m.filter((movie) => movie.id !== id));
    // keep all movies whose id does not match the given id
  };



  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        My favorite movies
      </h1>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 w-full">
        <div className="form-row mb-4 mt-4">
          <label
            htmlFor="movie"
            className="text-gray-700 font-medium mb-2"
          ></label>

          <input
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
            type="text"
            id="movie"
            className="border border-gray-400 rounded-lg px-3 py-2 w-full"
          />
          {/* //id should be matched with the label's htmlFor attribute */}
        </div>
        <button className="bg-purple-600 cursor-pointer text-white hover:bg-purple-700 py-2 px-2 w-full">
          Add Movie
        </button>
      </form>
      <ul className="w-full mt-8 space-y-3">
        {/* <li className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
          <label className="text-gray-700">Example Movie 1</label>
          <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700">Delete</button>
        </li>

        <li className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
          <label className="text-gray-700">Example Movie 2</label>
          <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700">Delete</button>
        </li> */}
        {/* map movies = whole list, movie = single item */}
        {movies.map((movie) => (
          <li key={movie.id} className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
            <label className="text-gray-800 font-medium">{movie.title}</label>
            <button
            onClick={() => deleteMovie(movie.id)}
             className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
