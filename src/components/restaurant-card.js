import { Link } from "react-router-dom";
import { RES_LOGO } from "../utils/constant";

const RestCard = (props) =>{
    const {name, cousine, rating, imageId, resId} = props;
    return (
        <div className="rest-card w-40 h-50 m-4 bg-slate-200 rounded-lg border border-solid break-words transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="res-card-info">
                    <img className="res-logo w-40 rounded-lg" src={RES_LOGO + imageId} />
                    <div className="res-name">
                        {name}
                    </div>
                    <div className="res-ratings">
                        Rating : {rating}
                    </div>
                    <div className="res-cousine">
                        {cousine.join(",")}
                    </div>
                </div>
            
        </div>
    )
}

export const HighRatedRestaurant = (RestCard)=>{
    return (props)=>{
        return (
            <div className="p-2 m-2">
                <div className="bg-slate-100">
                    High Rated Restaurants
                </div>
                <RestCard {...props}/>
            </div>
        )
    }
}

export default RestCard;