import fetchMovieReducer  from "./movies/movieReducers";
import { combineReducers } from "redux";

export default combineReducers({
  moviesData: fetchMovieReducer,
});
