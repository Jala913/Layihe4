import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_POST_MOVIES,
  REMOVE_MOVIE_TO_LIST,
  SET_LINKACTIVE,
  ADD_CORUSEL,
} from "../actions/actions-type";

const initialState = {
  postMovies: [],
  linkActive: false,
  listMovies: [],
  movies: [],
  corusel: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CORUSEL: {
      return { ...state, corusel: payload };
    }
    case ADD_MOVIES:
      return { ...state, movies: payload };

    case ADD_MOVIE_TO_LIST:
      const movie = state.movies.find((item) => item.imdbID === payload);
      const listMovies = [...state.listMovies, { ...movie }];
      return { ...state, listMovies };

    case REMOVE_MOVIE_TO_LIST:
      const newLinkMovies = state.listMovies.filter(
        (item) => item.imdbID !== payload
      );
      return { ...state, listMovies: newLinkMovies };

    case SET_LINKACTIVE:
      return { ...state, linkActive: payload };
    case ADD_POST_MOVIES:
      const data = state.postMovies.find((item) => item[1] === payload[1]);
      return !data
        ? { ...state, postMovies: [...state.postMovies, payload] }
        : state;
    default:
      return state;
  }
};
