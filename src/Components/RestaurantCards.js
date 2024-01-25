import { CDN_URL } from "./utils/constants";
import { RATING_STAR_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resDatas } = props;

  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, areaName } =
    resDatas?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4 className="rating-num">
        <span>
          <img className="rating-logo" src={RATING_STAR_URL}></img>
        </span>
        {avgRating}
      </h4>
      <span>{costForTwo}</span>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
