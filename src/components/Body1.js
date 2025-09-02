import { useState } from "react";
import { useEffect } from "react";
import { restaurantList } from "../../resturantList";
import RestaurantCardComponent from "./RestraurantCard";
import ShimmerCard from "./ShimmerCard";

//const body
const BodyComponent = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // get restaurant data function
  fetchData = async () => {
    if (restaurantList && restaurantList.length === 0) {
      return;
    }
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve(restaurantList), 5000);
    });
    setListOfRestaurants(
      JSON.parse(JSON.stringify(restaurantList.restaurants))
    );
  };

  // filter top rated restaurants
  const filterTopRatedRest = () => {
    incrementor++;
    let listOfRestaurants = restaurantList.restaurants.filter(
      (r) => r.info.avgRating > 4.2
    );
    setListOfRestaurants(listOfRestaurants);
  };

  // showing loading till we get the data
  if (listOfRestaurants.length === 0) {
    return (
      <div className="restaurant-card-list-container">
        {[1, 2, 3, 4, 5].map((e) => (
          <ShimmerCard key={e} />
        ))}
      </div>
    );
  }

  return (
    <div className="body">
      <div className="search-bar-container">
        <button className="filter-btn" onClick={filterTopRatedRest}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>{" "}
          Top Restaurants
        </button>
        <input
          id="search-input"
          className="search-input"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="restaurant-card-list-container">
        {listOfRestaurants.map((r) => {
          return (
            <RestaurantCardComponent key={r.info.id} restaurantDetail={r} />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
