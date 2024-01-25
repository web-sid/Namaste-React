import restList from "./utils/mockData";
import RestaurantCard from "./RestaurantCards";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restList);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search restaurant"></input>
        <button type="submit">Search</button>
      </div>
      <button
        className="topPick-btn"
        onClick={() => {
          const filter = listOfRestaurant.filter((res) => {
            return res.info.avgRating > 4.3;
          });
          setListOfRestaurant(filter);
        }}
      >
        Top Picks for you
      </button>
      <h2>Restaurant Chains in Noida</h2>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resDatas={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
