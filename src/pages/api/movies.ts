import axios, { type AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface IMovieList {
  results: any[];
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  const apiKey = process.env.API_KEY as string;
  const movieName: string = request.body.movieName;

  const url: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`;

  const apiResponse: AxiosResponse<IMovieList> = await axios.get(url);
  const movieList: any[] = apiResponse.data.results;

  const newMovieList = movieList.map((movie) => {
    const newMovie = {
      description: movie.overview,
      favorited: false,
      image: movie.backdrop_path,
      rating: Number(movie.vote_average.toFixed(1)),
      title: movie.title,
    };

    return newMovie;
  });

  return response.status(200).json(newMovieList);
}
