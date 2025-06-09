import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [resList, setresList] = useState(resObj);

    return (
        <div>
            <div className="body">
                <div className="searchbar">
                    <button onClick={()=>{
                        const filteredList = resList.filter(res=>res.info.avgRatingString > 4)
                        setresList(filteredList)
                    }}>Top rated restaurants</button>
                </div>
                <div className="res-container">
                    {resList.map(restaurant => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body;