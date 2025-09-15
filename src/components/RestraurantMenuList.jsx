import { useState } from "react";
import { useParams } from "react-router-dom";

import ShimmerCard from "./ShimmerCard";
import RestraurantMenuCard from "./RestraurantMenuCard";
import useMenuList from "../utils/useMenuList";

const RestraurantMenuList = () => {
  let [isLoading, setIsLoading] = useState(true);
  let { restName } = useParams();
  let menuList = useMenuList(restName);

  if (menuList === undefined && isLoading) {
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
