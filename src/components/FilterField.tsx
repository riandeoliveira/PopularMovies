import { useMovie } from "hooks/useMovie";

export const FilterField = (): JSX.Element => {
  const { changeFilterType } = useMovie();

  return (
    <div className="flex gap-3 mt-8 justify-center px-4">
      <input
        type="checkbox"
        id="toggle_movies"
        title="Mostrar filmes selecionados"
        onClick={changeFilterType}
      />
      <label htmlFor="toggle_movies" className="text-[18px] text-white">
        Mostrar meus filmes favoritos apenas
      </label>
    </div>
  );
};
