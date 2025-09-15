import { useState, useEffect } from "react";
import restaurantMenuList from "../../restuarantMenu";
const useMenuList = (restName) => {
  let [menuList, setMenuList] = useState(undefined);
  useEffect(() => {
    (async () => {
      const menuListData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(restaurantMenuList);
        }, 1000);
      });
      console.log(menuListData);
      setMenuList(menuListData?.[restName].itemCards);
    })();
  }, []);
  return menuList;
};
export default useMenuList;
