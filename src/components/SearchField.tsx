import { MovieContext } from "contexts/MovieContext";
import { useContext, type FormEvent } from "react";
import SearchMovie from "../../public/assets/icons/search-movie.svg";

export const SearchField = (): JSX.Element => {
  const { fetchMovies, setMovieSearchName } = useContext(MovieContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetchMovies();
  }

  return (
    <div className="flex justify-center mt-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-dark w-[634px] h-[74px] rounded-lg flex justify-between px-6 gap-6"
      >
        <input
          type="text"
          placeholder="Digite algum filme para pesquisar..."
          onChange={(e) => setMovieSearchName(e.target.value)}
          className="bg-neutral-dark w-full outline-none text-white"
        />
        <button type="button" title="Buscar filme">
          <SearchMovie />
        </button>
      </form>
    </div>
  );
};
