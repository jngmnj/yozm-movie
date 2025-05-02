import { Link } from "react-router-dom";

const MainBannerItem = ({ item }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={`/details/${item.id}`} className="cursor-pointer">
      <div className="aspect-[4/6]">
        <img
          src={`${baseUrl}${item.poster_path}`}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
};

export default MainBannerItem;
