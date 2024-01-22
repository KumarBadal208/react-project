import { Link } from "react-router-dom";
import RestCard from "./restaurant-card";

const Restaurant = ({listOfRestaurant})=>{
    return (
        <div className="restaurant">
            {
                listOfRestaurant.map(res=>(
                    <Link className="res-link" to={"/restaurant/"+ res.info.id} key={res.info.id}>
                        <RestCard 
                        name={res.info.name} 
                        cousine={res.info.cuisines} 
                        rating={res.info.avgRating}
                        imageId = {res.info.cloudinaryImageId}
                        id = {res.info.id}
                        />
                    </Link>
                    
                ))
            }
        </div>
    )
}

export default Restaurant;