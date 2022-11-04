import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const CardCarousel = ({ moviesData }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return isLoading ? (
    <div className="carousel">
      <SkeletonTheme color="#000" highlightColor="#202020">
        <Skeleton height={400} duration={2} />
      </SkeletonTheme>
    </div>
  ) : (
    <Carousel
      autoPlay
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      transitionTime={2000}
      interval={5000}
    >
      {moviesData &&
        moviesData.map((item) => {
          return (
            <div className="carousel">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              ></img>
              <div className="carousel_etails">
                <h1>{item.title}</h1>
                <h1>{item.release_date}</h1>
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};
