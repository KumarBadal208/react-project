import { Link } from "react-router-dom";
import { RES_LOGO } from "../utils/constant";

const RestCard = (props) =>{
    const {name, cousine, rating, imageId, resId} = props;
    return (
        <div className="rest-card">
                <div className="res-card-info">
                    <img className="res-logo" src={RES_LOGO + imageId} />
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

export default RestCard;