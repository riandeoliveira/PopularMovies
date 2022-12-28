import type { IMovie } from "types/movie";
import type { PayloadAction } from "types/redux";
import { MovieActionTypes } from "./action-types";

export interface MovieState {
  apiKey: string;
  favoriteMovies: IMovie[];
  filterBy: "all" | "favorites";
  isLoading: boolean;
  movieList: IMovie[];
}

export const movieInitialState: MovieState = {
  apiKey: "",
  favoriteMovies: [],
  filterBy: "all",
  isLoading: false,
  movieList: [],
};

export const movieReducer = (
  state = movieInitialState,
  action: PayloadAction<any>
): MovieState => {
  switch (action.type) {
    case MovieActionTypes.ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };

    case MovieActionTypes.DELETE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favoriteMovies: action.payload,
      };

    case MovieActionTypes.SET_API_KEY:
      return {
        ...state,
        apiKey: action.payload,
      };

    case MovieActionTypes.SET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
      };

    case MovieActionTypes.SET_FILTER_TYPE:
      return {
        ...state,
        filterBy: action.payload,
      };

    case MovieActionTypes.SET_IS_LOADING_MOVIES:
      return {
        ...state,
        isLoading: action.payload,
      };

    case MovieActionTypes.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };

    default:
      return state;
  }
};
