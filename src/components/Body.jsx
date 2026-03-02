import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
  const [listofRestaurants, setlistofRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
   },[]);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.579461&lng=85.1784094&carousel=true&third_party_vendor=1");

      const json = await data.json();

      console.log(json);
      setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }


  return listofRestaurants.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='search'>
        <div className="text-search">
          <input type="text" className="text-search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={()=> {
            const filteredList = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setlistofRestaurants(filteredList);
          }}>Search</button>
        </div>
        <button className='search-btn' onClick={()=> {
          const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4);
          setlistofRestaurants(filteredList);
        }}>
          Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        
      </div>
    </div>
  )
}

export default Body;