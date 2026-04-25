import RestaurantCard,{isRestaurantOpen} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //console.log("Body Rendered", listofRestaurants);
  
  const OpenRestaurantCard = isRestaurantOpen(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.579461&lng=85.1784094&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    // Dynamically find the restaurants array
    const cards = json?.data?.cards || [];
    let restaurants = [];
    for (const card of cards) {
      const res = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (res) {
        restaurants = res;
        break;
      }
    }

    setlistofRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl font-semibold">
        🔴 No Internet Connection 
      </div>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-linear-to-br from-gray-100 via-white to-gray-200 min-h-screen">
     <div className="px-6 py-8">
  <div className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl rounded-3xl p-6 flex flex-col lg:flex-row items-center justify-between gap-6">

    {/* Search Bar */}
    <div className="flex w-full lg:w-1/2 bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
      <input
        type="text"
        data-testid="searchInput"
        className="flex-1 px-5 py-3 outline-none text-gray-700 bg-transparent placeholder-gray-400"
        placeholder="Search for restaurants, food..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="px-6 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition-all duration-200"
        data-testid="searchBtn"
        onClick={() => {
          const filteredList = listofRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredList);
        }}
      >
        🔍 Search
      </button>
    </div>

    {/* Top Rated Button */}
    <button
      className="px-6 py-3 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
      onClick={() => {
        const filteredList = listofRestaurants.filter(
          (res) => res.info.avgRating > 4
        );
        setFilteredRestaurant(filteredList);
      }}
    >
      ⭐ Top Rated
    </button>

    {/* User Input */}
    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
      <label className="text-gray-600 font-medium">User:</label>
      <input
        className="outline-none bg-transparent text-gray-700 placeholder-gray-400"
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter name"
      />
    </div>

  </div>
</div>

      <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            data-testid="resCard"
            className="transform hover:-translate-y-2 hover:scale-[1.02] transition duration-300"
          >

            {restaurant.info.isOpen ? <OpenRestaurantCard resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;