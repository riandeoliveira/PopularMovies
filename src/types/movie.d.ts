export interface IApiMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

export interface IMovie {
  id: number;
  name: string;
  description: string;
  year: number;
  rating: number;
  favorite: boolean;
  image: string;
}
