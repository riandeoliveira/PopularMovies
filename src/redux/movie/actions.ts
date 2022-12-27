import type { IMovie } from "types/movie";
import { MovieActionTypes } from "./action-types";

export const addMovieToFavorites = (payload: IMovie) => ({
  type: MovieActionTypes.ADD_MOVIE_TO_FAVORITES,
  payload,
});

export const deleteMovieFromFavorites = (payload: IMovie[]) => ({
  type: MovieActionTypes.DELETE_MOVIE_FROM_FAVORITES,
  payload,
});

export const setApiKey = (payload: string) => ({
  type: MovieActionTypes.SET_API_KEY,
  payload,
});

export const setFilterType = (payload: "all" | "favorites") => ({
  type: MovieActionTypes.SET_FILTER_TYPE,
  payload,
});

export const setMovieList = (payload: IMovie[]) => ({
  type: MovieActionTypes.SET_MOVIE_LIST,
  payload,
});
