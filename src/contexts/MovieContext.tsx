import axios, { type AxiosResponse } from "axios";
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { IApiMovie, IMovie } from "types/movie";
import { useLocalStorage } from "usehooks-ts";

interface IMovieList {
  results: IApiMovie[];
}

interface IMovieContext {
  fetchMovies: () => Promise<void>;
  favoriteMovie: (movie: IMovie) => void;
  movieList: IMovie[];
  movieSearchName: string;
  setApiKey: Dispatch<SetStateAction<string>>;
  setMovieSearchName: Dispatch<SetStateAction<string>>;
  storageMovies: IMovie[];
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = (props: MovieProviderProps): JSX.Element => {
  const [apiKey, setApiKey] = useState<string>("");
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [movieSearchName, setMovieSearchName] = useState<string>("");
  const [storageMovies, setStorageMovies] = useLocalStorage<IMovie[]>(
    "favorite_movies",
    []
  );

  function findMovieById(id: number) {
    const storageMovie = storageMovies.find((movie) => movie.id === id);

    return storageMovie;
  }

  function getFavoriteMovieStatus(id: number): boolean {
    const hasMovie = findMovieById(id);

    if (hasMovie) {
      return true;
    }

    return false;
  }

  function addMovie(movie: IMovie) {
    setStorageMovies([...storageMovies, movie]);
  }

  function deleteMovie(movie: IMovie) {
    const updatedMovieList = storageMovies.filter(
      (storageMovie) => storageMovie.id !== movie.id
    );

    setStorageMovies(updatedMovieList);
  }

  function favoriteMovie(movie: IMovie) {
    movieList.map((movieItem) => {
      if (movie.id === movieItem.id) {
        movieItem.favorite = !movieItem.favorite;
      }

      return movieItem;
    });

    const hasMovie = findMovieById(movie.id);

    if (hasMovie) deleteMovie(movie);
    else addMovie(movie);
  }

  function createMovieData(movies: IApiMovie[]): void {
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

    setMovieList(newMovieList);
  }

  async function fetchMovies(): Promise<void> {
    const url: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieSearchName}`;

    try {
      const response: AxiosResponse<IMovieList> = await axios.get(url);
      const movies: IApiMovie[] = response.data.results;

      createMovieData(movies);
    } catch (error) {
      console.log(error);
    }
  }

  const data: IMovieContext = {
    fetchMovies,
    movieList,
    movieSearchName,
    favoriteMovie,
    setApiKey,
    setMovieSearchName,
    storageMovies,
  };

  return (
    <MovieContext.Provider value={data}>{props.children}</MovieContext.Provider>
  );
};
