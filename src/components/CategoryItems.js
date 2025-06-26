import { CDN_URL } from "../utils/constants";

const CategoryItems = ({ items }) => {
//   console.log(items);
  return (
    <div className="flex flex-col gap-4 bg-orange-100 p-4 rounded my-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex gap-4 justify-between border-b-1 py-4 border-orange-400"
        >
          <div className="w-10/12 flex flex-col gap-1 flex-wrap">
            <div className="font-bold">{item?.card?.info?.name}</div>
            <div className="font-semibold">
              <span>Rs. </span>
              {item?.card?.info?.price ? item?.card?.info?.price/ 100 : item?.card?.info?.defaultPrice / 100}
            </div>
            <div className="text-xs">{item?.card?.info?.description}</div>
          </div>
          <div className="w-2/12 h-full rounded-xl flex flex-col gap-2">
            <img className="w-full rounded-xl" src={CDN_URL + item?.card?.info?.imageId} />
            <button className="font-bold bg-orange-500 rounded-xl text-white">Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
