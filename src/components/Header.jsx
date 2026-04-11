import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
 
  const onlineStatus = useOnlineStatus();

   const { loggedInUser } = useContext(UserContext);
 
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);


  return (
    <div className="sticky top-0 z-50 bg-linear-to-r from-orange-500 to-red-500 shadow-lg">
      
      <div className="flex justify-between items-center px-10 py-3">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            className="w-16 h-18 rounded-full object-cover border-2 border-white shadow-md hover:scale-110 transition duration-300"
            src={LOGO_URL}
            alt="logo"
          />
          <h1 className="text-white font-bold text-xl tracking-wide">
            Foodie
          </h1>
        </div>

        {/* NAV ITEMS */}
        <ul className="flex items-center gap-8 text-white font-medium">
          
          {/* ONLINE STATUS */}
          <li className="flex items-center gap-2 text-sm">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                onlineStatus ? "bg-green-400" : "bg-red-400"
              } animate-pulse`}
            ></span>
            {onlineStatus ? "Online" : "Offline"}
          </li>

          {/* LINKS */}
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Grocery", path: "/grocery" },
          ].map((item, i) => (
            <li key={i} className="group relative cursor-pointer">
              <Link to={item.path}>
                <span className="group-hover:text-yellow-200 transition duration-300">
                  {item.name}
                </span>

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}

          {/* CART */}
          <li className="relative flex items-center gap-1 cursor-pointer group">
            <span className="text-lg">🛒</span>
            <span className="group-hover:text-yellow-200 transition duration-300">
             <Link to="/cart">Cart</Link>
            </span>

            <span className="absolute -top-2 -right-3 bg-white text-red-500 text-[10px] px-1.5 py-px rounded-full font-bold">
              {cartItem.length}
            </span>
          </li>

          {/* LOGIN BUTTON */}
          <button
            onClick={() =>
              setBtnName(btnName === "Login" ? "Logout" : "Login")
            }
            className="px-5 py-2 rounded-full bg-white text-red-500 font-semibold hover:bg-yellow-200 hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"
          >
            {btnName}
          </button>
          <li className="px-4 py-2 text-white font-medium">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;