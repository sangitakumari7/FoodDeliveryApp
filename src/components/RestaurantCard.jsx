import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;


  const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData.info;

  return (
    <div className='m-4 p-4 bg-white rounded-lg '>
      <img className='rounded-lg'
      alt='res-logo' src={CDN_URL+ cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="text-gray-600">{cuisines.join(', ')}</h4>
      <h4 className="font-semibold">${avgRating} ⭐</h4>
      <h4 className="text-gray-500">{costForTwo}</h4>
      <h4 className="text-gray-500">{sla.deliveryTime} mins</h4>
    </div>
  )
}

export const isRestaurantOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Open Badge */}
        <label className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
          Open
        </label>

        {/* Card */}
        <div className="hover:scale-105 transition-transform duration-300">
          <RestaurantCard {...props} />
        </div>
      </div>
    );
  };
};

export default RestaurantCard;