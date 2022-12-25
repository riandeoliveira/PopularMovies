import { MovieContext } from "contexts/MovieContext";
import Image from "next/image";
import { useContext } from "react";
import FavoriteHeart from "../../public/assets/icons/favorite-heart.svg";
import RatingStar from "../../public/assets/icons/rating-star.svg";

interface MovieCardProps {
  id: number;
  name: string;
  description: string;
  year: number;
  rating: number;
  favorite: boolean;
  image: string;
}

export const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { favoriteMovie } = useContext(MovieContext);

  return (
    <div className="bg-primary-light flex px-10 py-7 rounded-lg shadow-card justify-between">
      <div className="flex">
        <div className="flex items-center">
          <Image
            src={props.image}
            alt="Movie image"
            width={160}
            height={160}
            className="shadow-image rounded-full h-40 object-cover mr-16"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 w-[260px] text-lg text-neutral-lightness">
          <span>
            {props.name} ({props.year})
          </span>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <RatingStar />
              <span>{props.rating}</span>
            </div>
            <div className="flex gap-3">
              <FavoriteHeart
                className={props.favorite ? "fill-complementary-red" : ""}
                onClick={() => favoriteMovie(props)}
              />
              <span>Favoritar</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-neutral-light font-medium leading-8 w-[592px]">
        {props.description}
      </p>
    </div>
  );
};
