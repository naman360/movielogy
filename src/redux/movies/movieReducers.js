import {
  DETAILS_LOADING,
  FETCH_DETAILS,
  FETCH_DETAILS_FAILED,
  FETCH_FAILED,
  FETCH_MOVIES,
  FETCH_SUCCESS,
} from "./movieTypes";

const initialState = {
  searchRes: [],
  loading: "",
  detailsLoading: "",
  error: "",
  details: "",
};
function fetchMovieReducer(state = initialState, action) {
  switch (action.type) {
    case DETAILS_LOADING:
      return {
        ...state,
        detailsLoading: true,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchRes: action.payload,
        error: "",
      };
    case FETCH_DETAILS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    case "TEST":
      return {
        ...state,
        json: action.payload,
      };
    case FETCH_DETAILS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        searchRes: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
export default fetchMovieReducer;
