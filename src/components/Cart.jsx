import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-red-100 to-pink-100 flex flex-col items-center py-10 px-4">
      
      {/* Card Container */}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🛒 Cart</h1>

          {cartItems.length > 0 && (
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-lg shadow-md"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl text-gray-600 font-medium">
              Your cart is empty 😔
            </h2>
            <p className="text-gray-400 mt-2">
              Add some delicious items to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;