import { FilterField } from "components/FilterField";
import { Header } from "components/Header";
import { MovieList } from "components/MovieList";
import { SearchField } from "components/SearchField";
import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiKey } from "redux/movie/actions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiKey(apiKey));
  }, []);

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
