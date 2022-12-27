interface IMovieActionTypes {
  ADD_MOVIE_TO_FAVORITES: string;
  DELETE_MOVIE_FROM_FAVORITES: string;
  SET_API_KEY: string;
  SET_FILTER_TYPE: string;
  SET_MOVIE_LIST: string;
}

export const MovieActionTypes: IMovieActionTypes = {
  ADD_MOVIE_TO_FAVORITES: "movie/addMovieToFavorites",
  DELETE_MOVIE_FROM_FAVORITES: "movie/deleteMovieFromFavorites",
  SET_API_KEY: "movie/setApiKey",
  SET_FILTER_TYPE: "movie/setFilterType",
  SET_MOVIE_LIST: "movie/setMovieList",
};
