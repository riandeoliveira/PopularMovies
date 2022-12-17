import { FilterField } from "components/FilterField";
import { Header } from "components/Header";
import { SearchField } from "components/SearchField";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="bg-primary-dark min-h-screen font-primary-family">
      <Header />
      <SearchField />
      <FilterField />
    </div>
  );
};

export default Home;
