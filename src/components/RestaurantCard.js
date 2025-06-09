import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {name, cuisines, costForTwo, avgRatingString, sla} = resData?.info
    return (
        <div className="res-card">
            <div className="res-card-img">
                <img src={CDN_URL + resData.info.cloudinaryImageId} alt="card-image"/>
            </div>
            <div className="res-name">{name}</div>
            <div className="res-cuisine">{cuisines.join(", ")}</div>
            <div className="res-cost-for-two">{costForTwo}</div>
            <div className="res-rating">{avgRatingString}</div>
            <div className="res-delivery-time">{sla.slaString}</div>
        </div>
    )
}

export default RestaurantCard;