import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"></img>
      </Link>
      <Link to="/popular">
        <span>Popular</span>
      </Link>
      <Link to="/top_Rated">
        <span>Top_Rated</span>
      </Link>
      <Link to="/up_coming">
        <span>Up_Comining</span>
      </Link>
    </div>
  );
};
