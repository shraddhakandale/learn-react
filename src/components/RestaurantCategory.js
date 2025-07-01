import React, { useState } from "react";
import CategoryItems from "./CategoryItems";

const RestaurantCategory = ({ categoryData, showItems, setShowIndex}) => {
//   console.log(categoryData);
  const handleClick = ()=>{
    setShowIndex()
  }
  return (
    <div>
      <div className="flex flex-col p-4 bg-orange-200 rounded">
        <div  onClick={handleClick} className="w-full flex justify-between">
          <span className="text-lg font-bold">
            {categoryData.title} ({categoryData.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>
            {showItems && <CategoryItems items={categoryData.itemCards}/> }
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
