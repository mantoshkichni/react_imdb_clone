import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const Card = ({ item }) => {
  console.log(typeof item.vote_average);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return isLoading ? (
    <div className="card">
      <SkeletonTheme color="#000" highlightColor="#202020">
        <Skeleton height={300} duration={2} />
      </SkeletonTheme>
    </div>
  ) : (
    <div className="card">
      <Link to={`/details/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        ></img>
        <div className="details">
          <h1>{item.title}</h1>
          <h1>{item.release_date}</h1>
          <StarRatings
            starDimension="13px"
            starRatedColor="rgb(255,255,255)"
            numberOfStars={Math.floor(item.vote_average)}
            name="rating"
          />
        </div>
      </Link>
    </div>
  );
};
