import { FilterField } from "components/FilterField";
import { Header } from "components/Header";
import { MovieList } from "components/MovieList";
import { SearchField } from "components/SearchField";
import { MovieContext } from "contexts/MovieContext";
import type { GetStaticProps, NextPage } from "next";
import { useContext, useEffect } from "react";

interface HomeProps {
  apiKey: string;
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      apiKey: process.env.API_KEY,
    },
  };
};

const Home: NextPage<HomeProps> = ({ apiKey }): JSX.Element => {
  const { setApiKey } = useContext(MovieContext);

  useEffect(() => {
    setApiKey(apiKey);
  });

  return (
    <div className="bg-primary-dark min-h-screen font-primary-family">
      <Header />
      <SearchField />
      <FilterField />
      <MovieList />
    </div>
  );
};

export default Home;
