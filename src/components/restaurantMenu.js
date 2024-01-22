import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_ID_URL } from "../utils/constant";
import Shimmer from "./shimmer";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    let [resInfo, setResinfo] = useState([]);
    let [resName, setResName] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    fetchData = async ()=>{
        let data = await fetch(RESTAURANT_ID_URL+ resId);
        const json = await data.json();
        console.log("res->",json);
        console.log("ffd",json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        let info = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
        if(info && info.length){
            setResinfo(info);
        }
        setResName(json.data.cards[0].card.card.info.name);
    }

    if(resInfo.length===0){
        console.log("shimmer");
        return (<Shimmer/>)
    }

    return (
        <div>
            <h1>{resName}</h1>
            <h3>Menu : </h3>
            <ul>
                {
                    resInfo.map(res=>(
                        <li key={res.card.info.id}>{res.card.info.name}</li>
                    ))
                }
            </ul>
        </div>
    )
};

export default RestaurantMenu;