import type { IMovie } from "types/movie";
import type { PayloadAction } from "types/redux";
import { MovieActionTypes } from "./action-types";

export const addMovieToFavorites = (
  payload: IMovie
): PayloadAction<typeof payload> => ({
  type: MovieActionTypes.ADD_MOVIE_TO_FAVORITES,
  payload,
});

export const deleteMovieFromFavorites = (
  payload: IMovie[]
): PayloadAction<typeof payload> => ({
  type: MovieActionTypes.DELETE_MOVIE_FROM_FAVORITES,
  payload,
});

export const setApiKey = (payload: string): PayloadAction<typeof payload> => ({
  type: MovieActionTypes.SET_API_KEY,
  payload,
});

export const setFavoriteMovies = (
  payload: IMovie[]
): PayloadAction<typeof payload> => ({
  type: MovieActionTypes.SET_FAVORITE_MOVIES,
  payload,
});

export const setFilterType = (
  payload: "all" | "favorites"
): PayloadAction<typeof payload> => ({
  type: MovieActionTypes.SET_FILTER_TYPE,
  payload,
});

export const setIsLoadingMovies = (
  payload: boolean
): PayloadAction<typeof payload> => ({
  type: MovieActionTypes.SET_IS_LOADING_MOVIES,
  payload,
});

export const setMovieList = (
  payload: IMovie[]
): PayloadAction<typeof payload> => ({
  type: MovieActionTypes.SET_MOVIE_LIST,
  payload,
});
