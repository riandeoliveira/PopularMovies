import axios, { type AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavorites,
  deleteMovieFromFavorites,
  setFilterType,
  setMovieList,
} from "redux/movie/actions";
import type { IApiMovie, IMovie } from "types/movie";
import type { RootState } from "types/redux";
import { useLocalStorage } from "usehooks-ts";

interface UseMovieProps {
  changeFilterType: () => void;
  favoriteMovie: (movie: IMovie) => void;
  fetchMoviesByName: (movieName: string) => Promise<void>;
  getSelectedMovieList: () => IMovie[];
}

export const useMovie = (): UseMovieProps => {
  const [storageMovies, setStorageMovies] = useLocalStorage<IMovie[]>(
    "favorite_movies",
    []
  );
  const { favoriteMovies, movieList, apiKey, filterBy } = useSelector(
    (state: RootState) => state.movie
  );
  const dispatch = useDispatch();

  const findMovieById = (id: number): IMovie | undefined => {
    return favoriteMovies.find((movie) => movie.id === id);
  };

  const getFavoriteMovieStatus = (id: number): boolean => {
    const hasMovie: IMovie | undefined = findMovieById(id);

    if (hasMovie) return true;

    return false;
  };

  const addMovie = (movie: IMovie): void => {
    const newMovie: IMovie = {
      ...movie,
      favorite: true,
    };

    dispatch(addMovieToFavorites(newMovie));

    setStorageMovies([...storageMovies, newMovie]);
  };

  const deleteMovie = (movie: IMovie): void => {
    const updatedMovieList = favoriteMovies.filter(
      (favoriteMovie) => favoriteMovie.id !== movie.id
    );

    dispatch(deleteMovieFromFavorites(updatedMovieList));

    setStorageMovies(updatedMovieList);
  };

  const favoriteMovie = (movie: IMovie): void => {
    movieList.map((movieItem) => {
      if (movie.id === movieItem.id) {
        movieItem.favorite = !movieItem.favorite;
      }

      return movieItem;
    });

    const hasMovie: IMovie | undefined = findMovieById(movie.id);

    if (hasMovie) deleteMovie(movie);
    else addMovie(movie);
  };

  const createMovieData = (movies: IApiMovie[]): void => {
    const newMovieList: IMovie[] = movies.map((movie) => {
      const newMovie: IMovie = {
        id: movie.id,
        name: movie.title,
        description: movie.overview,
        year: Number(movie.release_date.slice(0, 4)),
        rating: movie.vote_average.toFixed(1) as any,
        favorite: getFavoriteMovieStatus(movie.id),
        image: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      };

      return newMovie;
    });

    dispatch(setMovieList(newMovieList));
  };

  const fetchMoviesByName = async (movieName: string): Promise<void> => {
    const url: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`;

    try {
      const response: AxiosResponse<{ results: IApiMovie[] }> = await axios.get(
        url
      );
      const movies: IApiMovie[] = response.data.results;

      createMovieData(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const changeFilterType = (): void => {
    if (filterBy === "all") dispatch(setFilterType("favorites"));
    else dispatch(setFilterType("all"));
  };

  const getSelectedMovieList = (): IMovie[] => {
    if (filterBy === "all") return movieList;

    return favoriteMovies;
  };

  return {
    changeFilterType,
    favoriteMovie,
    fetchMoviesByName,
    getSelectedMovieList,
  };
};
