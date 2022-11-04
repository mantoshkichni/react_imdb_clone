import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const Details = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    setTimeout(() => {
      getData();
      setIsLoading(false);
    }, 2000);
  }, []);
  const getData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    setDetails(data.data);
  };
  return isLoading ? (
    <>
      <div className="details-top-section">
        <SkeletonTheme color="#000" highlightColor="#202020">
          <Skeleton height={400} duration={2} />
        </SkeletonTheme>
      </div>
    </>
  ) : (
    <div className="moviedetails">
      <div className="details-top-section">
        <img
          src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`}
        ></img>
        <div className="detail">
          <h1 className="title">{details?.original_title}</h1>
          <h1>{details?.runtime} mins</h1>
          <h1>{details?.release_date}</h1>
          {details?.genres.map((item) => {
            return <h1 className="generes">{item.name}</h1>;
          })}
        </div>
      </div>
      <div className="details-bottom-section">
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/original/${details?.poster_path}`}
        ></img>
        <div className="lower_details">
          <h1>Overview...</h1>
          <p>{details?.overview}</p>
        </div>
      </div>
    </div>
  );
};
