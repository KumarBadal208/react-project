import RestCard from "./restaurant-card";
// import { listOfRestaurant } from "../utils/mock-data";

const Restaurant = ({listOfRestaurant})=>{
    return (
        <div className="restaurant">
            {
                listOfRestaurant.map(res=>(
                    <RestCard 
                    name={res.info.name} 
                    cousine={res.info.cuisines} 
                    rating={res.info.avgRating}
                    imageId = {res.info.cloudinaryImageId}
                    key={res.info.id}
                     />
                ))
            }
        </div>
    )
}

export default Restaurant;