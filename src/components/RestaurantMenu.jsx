import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.579461&lng=85.1784094&carousel=true&third_party_vendor=1");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

  return resInfo === null ? (
  <Shimmer/>) : (
    <div className='menu'>
        <h1>{resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h1>
        <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Pasta</li>
            <li>Salad</li>
            <li>Ice Cream</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;
