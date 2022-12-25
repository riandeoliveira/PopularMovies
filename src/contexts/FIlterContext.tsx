import { createContext, useContext, useState, type ReactNode } from "react";
import type { IMovie } from "types/movie";
import { MovieContext } from "./MovieContext";

type FilterType = "all" | "favorites";

interface IFilterContext {
  changeFilterType: () => void;
  getSelectedMovieList: () => IMovie[];
}

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({} as IFilterContext);

export const FilterProvider = (props: FilterProviderProps): JSX.Element => {
  const { movieList, storageMovies } = useContext(MovieContext);

  const [filterType, setFilterType] = useState<FilterType>("all");

  function changeFilterType(): void {
    if (filterType === "all") setFilterType("favorites");
    else setFilterType("all");
  }

  function getSelectedMovieList(): IMovie[] {
    if (filterType === "all") return movieList;

    return storageMovies;
  }

  const data: IFilterContext = {
    changeFilterType,
    getSelectedMovieList,
  };

  return (
    <FilterContext.Provider value={data}>
      {props.children}
    </FilterContext.Provider>
  );
};
