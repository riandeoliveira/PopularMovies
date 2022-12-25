import { FilterContext } from "contexts/FIlterContext";
import { useContext } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = (): JSX.Element => {
  const { getSelectedMovieList } = useContext(FilterContext);

  const movies = getSelectedMovieList();

  return (
    <div className="flex justify-center pt-16 pb-16">
      <div className="flex flex-col w-[1280px] gap-12 px-4">
        {movies.map((movie) => (
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
        ))}
      </div>
    </div>
  );
};
