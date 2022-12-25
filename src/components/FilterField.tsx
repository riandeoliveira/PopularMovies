import { FilterContext } from "contexts/FIlterContext";
import { useContext } from "react";

export const FilterField = (): JSX.Element => {
  const { changeFilterType } = useContext(FilterContext);

  return (
    <div className="flex gap-3 mt-8 justify-center">
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
