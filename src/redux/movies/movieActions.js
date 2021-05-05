import { FETCH_MOVIES, FETCH_FAILED, FETCH_SUCCESS } from "./movieTypes";
import axios from "axios";
export function requestData(searchVal) {
  return (dispatch) => {
    dispatch(fetchMovies());
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f83b662ea52b74d3700e9c84e6ef28ff&language=en-US&page=1&include_adult=false&query=${searchVal}`
      )
      .then((res) => {
        dispatch(fetchMoviesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchMoviesFailed(err.message));
      });
  };
}

export function requestTrending() {
  return (dispatch) => {
    dispatch(fetchMovies());
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=f83b662ea52b74d3700e9c84e6ef28ff`
      )
      .then((res) => {
        dispatch(fetchMoviesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchMoviesFailed(err.message));
      });
  };
}
export function fetchMovies() {
  return {
    type: FETCH_MOVIES,
  };
}

export function fetchMoviesSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
}
export function fetchMoviesFailed(error) {
  return {
    type: FETCH_FAILED,
    payload: error,
  };
}
