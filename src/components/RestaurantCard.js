import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {name, cuisines, costForTwo, avgRatingString, sla} = resData?.info
    return (
        <div className="res-card">
            <div className="res-card-img">
                <img src={CDN_URL + resData.info.cloudinaryImageId} alt="card-image"/>
            </div>
            <div className="res-name"><h3>{name}</h3></div>
            <div className="res-cuisine"><h4>{cuisines.join(", ")}</h4></div>
            <div className="res-cost-for-two"><h5>{costForTwo}</h5></div>
            <div className="res-rating"><h5>{avgRatingString}</h5></div>
            <div className="res-delivery-time"><h5>{sla.slaString}</h5></div>
        </div>
    )
}

export default RestaurantCard;