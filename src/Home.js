import { CardCarousel } from "./Carousel";
import { Popular } from "./Popular";

export const Home = ({ moviesData }) => {
  return (
    <>
      <CardCarousel moviesData={moviesData} />
      <Popular moviesData={moviesData} />
    </>
  );
};
