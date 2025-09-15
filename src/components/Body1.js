import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { restaurantList } from "../../resturantList";
import RestaurantCardComponent from "./RestraurantCard";
import ShimmerCard from "./ShimmerCard";
import SearchAndFilterComponent from "./SearchAndFilter";

//const body
const BodyComponent = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // get restaurant data function
  const fetchData = async () => {
    // const target = "https://pastebin.com/raw/0QcdEDBL";
    // const url =
    //   "https://api.allorigins.win/raw?url=" + encodeURIComponent(target);
    // const res = await fetch(url); // keep headers minimal
    // if (!res.ok) throw new Error(`HTTP ${res.status}`);
    // const data1 = await res.json();

    const data = await new Promise((resolve) => {
      setTimeout(() => resolve(restaurantList), 2000);
    });
    setListOfRestaurants(
      JSON.parse(JSON.stringify(restaurantList.restaurants))
    );
    setIsLoading(false);
  };

  // filter top rated restaurants
  const filterTopRatedRest = () => {
    let listOfRestaurants = restaurantList.restaurants.filter(
      (r) => r.info.avgRating > 4.2
    );
    setListOfRestaurants(listOfRestaurants);
  };

  const onSearchTermChange = (e) => {
    const searchTerm = e.target?.value;

    if (e.target.value === "") {
      setListOfRestaurants(restaurantList.restaurants);
      return;
    }

    let filteredRestaurantsBySearch = restaurantList.restaurants.filter((r) => {
      return (
        r.info.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        r.info.cuisines
          .join(" ")
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );
    });
    setListOfRestaurants(filteredRestaurantsBySearch);
    return <p>No text match your search</p>;
  };

  // showing loading till we get the data
  if (isLoading) {
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
      <SearchAndFilterComponent
        onFilterTopRated={filterTopRatedRest}
        onSearchTermChange={onSearchTermChange}
      />
      <div className="restaurant-card-list-container">
        {listOfRestaurants.map((r) => {
          return (
            <Link to={"/menu/" + r.info.name} key={r.info.id}>
              <RestaurantCardComponent restaurantDetail={r} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
