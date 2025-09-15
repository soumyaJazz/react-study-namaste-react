import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ShimmerCard from "./ShimmerCard";
import { restaurantMenuList } from "../../restuarantMenu";
import RestraurantMenuCard from "./RestraurantMenuCard";

const RestraurantMenuList = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [menuList, setMenuList] = useState([]);
  let { restName } = useParams();

  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    const menuListData = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(restaurantMenuList);
      }, 1000);
    });
    console.log(menuListData);
    setMenuList(menuListData?.[restName].itemCards);
    setIsLoading(false);
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
    <div className="menuList">
      <h2 style={{ marginBottom: "4rem" }}>{restName}</h2>
      {menuList.map((m) => {
        return (
          <RestraurantMenuCard key={m.card.info.id} menuList={m.card.info} />
        );
      })}
    </div>
  );
};
export default RestraurantMenuList;
