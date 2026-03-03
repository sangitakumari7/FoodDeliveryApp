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

    if (resInfo === null) return<Shimmer/>;

    const restaurantInfo = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    const { name, cuisines, costForTwo } = restaurantInfo || {};

    const {menuItems} = resInfo?.cards[4]?.card?.card?. gridElements?.infoWithStyle?.info[0]?.action?.text;
    console.log(menuItems);


  return  (
    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines?.join(', ')}  - {costForTwo}</p>
        <hr/>
        <p>{menuItems}</p>
        <h2>Menu</h2>
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
