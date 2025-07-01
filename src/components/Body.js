import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {loggedInUser, setUserName} = useContext(userContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    setresList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data.cards[1]);
    // console.log(json);
  };

  // Conditional rendering
  // if(resList.length === 0){
  //   return (
  //       <Shimmer />
  //   )
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline! please check your internet connection.
      </h1>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="body flex flex-col gap-8 px-4">
        <div className="search-filter-bar h-8 flex gap-4">
          <div className="searchbar flex gap-4">
            <input
              type="text"
              className="outline rounded p-2 bg-white"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn outline px-4 rounded bg-orange-500 text-white flex items-center"
              onClick={() => {
                setFilteredRes(
                  resList.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                );
              }}
            >
              <span>Search</span>
            </button>
          </div>
          <div className="filter-btn">
            <button
              className="outline h-8 px-4 rounded bg-orange-500 text-white flex items-center"
              onClick={() => {
                const filteredList = resList.filter(
                  (res) => res.info.avgRating > 4.5
                );
                setFilteredRes(filteredList);
              }}
            >
              Top rated restaurants
            </button>
          </div>
          <div>
          <input
              type="text"
              className="outline rounded p-2 bg-white"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="res-container mb-8 flex flex-wrap max-w-[1280px] gap-8 mx-auto justify-center">
          {filteredRes.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant.info.aggregatedDiscountInfoV3?.discountTag ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
