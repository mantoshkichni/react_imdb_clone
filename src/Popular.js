import { Card } from "./Card";

export const Popular = ({ moviesData }) => {
  return (
    <div className="container">
      {moviesData?.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};
