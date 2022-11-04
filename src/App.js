import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Details } from "./Details";
import { Header } from "./Header";
import { Home } from "./Home";
import { Popular } from "./Popular";
import "./styles.scss";
import { TopRated } from "./TopRated";
import { UpComing } from "./UpComing";

export default function App() {
  const [moviesData, setMoviesData] = useState();

  useEffect(() => {
    setTimeout(() => {
      getMoviesData();
    }, 2000);
  }, []);
  const getMoviesData = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    );
    setMoviesData(data.data.results);
    console.log(moviesData);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home moviesData={moviesData} />}></Route>
        <Route
          path="/popular"
          element={<Popular moviesData={moviesData} />}
        ></Route>
        <Route path="/top_Rated" element={<TopRated />}></Route>
        <Route path="/up_coming" element={<UpComing />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}
