import Restaurant from "./restaurant";
import { listOfRestaurant } from "../utils/mock-data";
import { useState } from "react";


const Body = ()=>{
    let [ restaurantList, setRestaurantList ] = useState(listOfRestaurant);
    return (
        <div className="body">
            <div className="filter" onClick={()=>{
                let filterData = listOfRestaurant.filter(res=> res.info.avgRating>4);
                setRestaurantList(filterData);
            }}>
                <button className="filter-btn">Filter</button>
            </div>
            <div className="restaurant">
                <Restaurant listOfRestaurant={restaurantList} />
            </div>
        </div>
    )
};

export default Body;