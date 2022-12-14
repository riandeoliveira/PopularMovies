interface IMovieActionTypes {
  ADD_MOVIE_TO_FAVORITES: string;
  DELETE_MOVIE_FROM_FAVORITES: string;
  SET_API_KEY: string;
  SET_FAVORITE_MOVIES: string;
  SET_FILTER_TYPE: string;
  SET_IS_LOADING_MOVIES: string;
  SET_MOVIE_LIST: string;
}

export const MovieActionTypes: IMovieActionTypes = {
  ADD_MOVIE_TO_FAVORITES: "movie/addMovieToFavorites",
  DELETE_MOVIE_FROM_FAVORITES: "movie/deleteMovieFromFavorites",
  SET_API_KEY: "movie/setApiKey",
  SET_FAVORITE_MOVIES: "movie/setFavoriteMovies",
  SET_FILTER_TYPE: "movie/setFilterType",
  SET_IS_LOADING_MOVIES: "movie/setIsLoadingMovies",
  SET_MOVIE_LIST: "movie/setMovieList",
};
