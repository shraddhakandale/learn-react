import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId} = useParams();
  const fetchMenu = async () => {
    const data = await fetch(
        MENU_API_URL+resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const menuList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div>
      <div className="resMenu">
        <h1>{name}</h1>
        <h3>
          {avgRating} - {costForTwoMessage}
        </h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
      <div>
        <h1>Menu</h1>
        {menuList.slice(2).map((listItem, index) => (
          <ul key={index}>
            <h2>{listItem?.card?.card.title}</h2>
            {listItem?.card?.card?.itemCards?.map((item, idx) => (
              <li key={item?.card?.info?.id || idx}>{item?.card?.info?.name} - {"Rs." + item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
