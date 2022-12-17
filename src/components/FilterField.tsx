export const FilterField = (): JSX.Element => {
  return (
    <div className="flex gap-3 mt-8 justify-center">
      <input
        type="checkbox"
        id="toggle_movies"
        title="Mostrar filmes selecionados"
      />
      <label htmlFor="toggle_movies" className="text-[18px]">
        Mostrar meus filmes favoritos apenas
      </label>
    </div>
  );
};
