import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setresList] = useState(resObj);
  const [searchText, setsearchText] = useState("");

  return (
    <div>
      <div className="body">
        <div className="searchbar">
          <input type="text" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value)
          }}/>
        </div>
        <div className="filter-btn">
          <button
            onClick={() => {
              const filteredList = resList.filter(res =>
                res.info.name.toLocaleLowerCase().includes(searchText)
              );
              console.log(searchText);
              setresList(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="res-container">
          {resList.map((restaurant) => {
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
