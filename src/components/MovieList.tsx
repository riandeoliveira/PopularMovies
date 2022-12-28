import { useMovie } from "hooks/useMovie";
import { useSelector } from "react-redux";
import type { IMovie } from "types/movie";
import type { RootState } from "types/redux";
import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";

export const MovieList = (): JSX.Element => {
  const { getSelectedMovieList } = useMovie();
  const { filterBy, isLoading } = useSelector(
    (state: RootState) => state.movie
  );

  const movies: IMovie[] = getSelectedMovieList();

  const renderMovies = (): JSX.Element | JSX.Element[] => {
    const hasMovies: boolean = movies.length > 0;
    const hasMovieList: boolean = filterBy === "favorites" && !hasMovies;
    const hasFavoriteMovies: boolean = filterBy === "all" && !hasMovies;

    let errorMessage: string = "";

    if (!hasMovieList) {
      errorMessage = "Nenhum filme encontrado :(";
    }

    if (!hasFavoriteMovies) {
      errorMessage =
        "Você ainda não possui filmes favoritos. Experimente adicionar alguns!";
    }

    if (hasMovies) {
      return (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            movies.map((movie) => (
              <MovieCard
                id={movie.id}
                name={movie.name}
                description={movie.description}
                year={movie.year}
                rating={movie.rating}
                favorite={movie.favorite}
                image={movie.image}
                key={movie.id}
              />
            ))
          )}
        </>
      );
    }

    return <p className="text-center">{errorMessage}</p>;
  };

  return (
    <div className="flex justify-center pt-16 pb-16">
      <div className="flex flex-col w-[1280px] gap-12 px-4">
        {renderMovies()}
      </div>
    </div>
  );
};
