import SearchIcon from "../../public/assets/icons/search-icon.svg";

export const SearchField = (): JSX.Element => {
  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="bg-neutral-dark w-[634px] h-[74px] rounded-lg flex justify-between px-6 gap-6">
        <input
          type="text"
          placeholder="Digite algum filme para pesquisar..."
          className="bg-neutral-dark w-full outline-none text-white"
        />
        <button type="submit" title="Buscar filme">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
