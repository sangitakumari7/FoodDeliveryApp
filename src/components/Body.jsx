import RestaurantCard,{isRestaurantOpen} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnineStatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered", listofRestaurants);
  
  const OpenRestaurantCard = isRestaurantOpen(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.579461&lng=85.1784094&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

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

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-linear-to-br from-gray-100 via-white to-gray-200 min-h-screen">
      <div className="px-6 py-8">
        <div className="backdrop-blur-lg bg-white/60 border border-white/30 shadow-xl rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex w-full md:w-1/2 bg-white rounded-full shadow-inner overflow-hidden">
            <input
              type="text"
              className="flex-1 px-5 py-3 outline-none text-gray-700 bg-transparent"
              placeholder="Search for restaurants, food..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-8 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90 transition"
              onClick={() => {
                const filteredList = listofRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="px-8 py-3 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            ⭐ Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
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