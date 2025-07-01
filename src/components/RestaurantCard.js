import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {name, cuisines, costForTwo, avgRatingString, sla} = resData?.info
    return (
        <div className="res-card h-full w-[220px] bg-orange-200 p-2.5 flex flex-col rounded gap-1 hover:outline-2 hover:outline-orange-300 hover:cursor-pointer">
            <div className="res-card-img">
                <img src={CDN_URL + resData.info.cloudinaryImageId} alt="card-image" className="w-full h-[140px] object-cover"/>
            </div>
            <div className="res-name font-bold text-lg"><h3>{name}</h3></div>
            <div className="res-cuisine"><h4>{cuisines.join(", ")}</h4></div>
            <div className="res-cost-for-two"><h5>{costForTwo}</h5></div>
            <div className="res-rating"><h5>{avgRatingString+"⭐"}</h5></div>
            <div className="res-delivery-time"><h5>{sla.slaString}</h5></div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard)=>{
    return ({resData})=>{
        return (
            <div className="h-full">
                <label className="absolute bg-black opacity-80 ml-[-10px] text-white text-lg px-4">Flat Deal</label>
                <RestaurantCard resData={resData}/>
            </div>
        )
    }
}

export default RestaurantCard;