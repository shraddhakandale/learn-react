import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //       MENU_API_URL+resId
  //   );
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  // const menuList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(menuList);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="">
      <div className="flex justify-center w-full flex-col max-w-[768px] m-auto gap-8">
        <div className="max-w-[768px] w-full">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h3 className="text-lg font-semibold">
            {avgRating + "⭐"} - {costForTwoMessage}
          </h3>
          <h4>{cuisines.join(", ")}</h4>
        </div>
        {/* Accordian */}
        <div className="flex flex-col gap-6">
          {categories.map((category,index) => {
            // {index === showIndex ? setShowItems(true) : setShowItems(false)}
            return (
              <RestaurantCategory
                key={category?.card?.card?.title}
                categoryData={category?.card?.card}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {()=>{setShowIndex(prevIndex => prevIndex === index ? null : index)}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
