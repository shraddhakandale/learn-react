import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json.data.cards[1]);
    console.log(json);
  };

  // Conditional rendering
  // if(resList.length === 0){
  //   return (
  //       <Shimmer />
  //   )
  // }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="body">
        <div className="search-filter-bar">
          <div className="searchbar">
            <input type="text" className="searchbox" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }} />
            <button className="search-btn" onClick={()=>{
                setFilteredRes(resList.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
            }}>Search</button>
          </div>
          <div className="filter-btn">
            <button
              onClick={() => {
                const filteredList = resList.filter(
                  (res) => res.info.avgRating > 4
                );
                setresList(filteredList);
              }}
            >
              Top rated restaurants
            </button>
          </div>
        </div>
        <div className="res-container">
          {filteredRes.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
