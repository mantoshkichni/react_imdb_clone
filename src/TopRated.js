import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const TopRated = () => {
  const [toprated_Movies, setToprated_Movies] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    );
    setToprated_Movies(data.data.results);
  };
  return (
    <div className="container">
      {toprated_Movies?.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};
