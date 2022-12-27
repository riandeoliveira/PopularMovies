import { useMovie } from "hooks/useMovie";
import { useRef, type FormEvent } from "react";
import SearchMovie from "../../public/assets/icons/search-movie.svg";

export const SearchField = (): JSX.Element => {
  const { fetchMoviesByName } = useMovie();
  const movieSearchField = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    fetchMoviesByName(movieSearchField.current?.value as string);
  };

  return (
    <div className="flex justify-center mt-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-dark w-[634px] h-[74px] rounded-lg flex justify-between px-6 gap-6"
      >
        <input
          type="text"
          placeholder="Digite algum filme para pesquisar..."
          ref={movieSearchField}
          className="bg-neutral-dark w-full outline-none text-white"
        />
        <button type="button" title="Buscar filme">
          <SearchMovie />
        </button>
      </form>
    </div>
  );
};
