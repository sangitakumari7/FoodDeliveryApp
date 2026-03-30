const Grocery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-white to-green-300 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-2xl w-full text-center">
        
        <div className="text-6xl mb-4">🛍️</div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Grocery Store Coming Soon
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We’re working hard to bring you a seamless online grocery shopping experience.
        </p>

        <p className="text-gray-500 mb-8">
          Fresh fruits, vegetables, daily essentials, and exciting offers will be available soon.
          Stay tuned and be the first to explore!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
            Get Notified
          </button>

          <button className="border border-green-500 text-green-600 hover:bg-green-100 px-6 py-3 rounded-full transition duration-300">
            Explore Other Pages
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
          <div className="bg-green-50 p-4 rounded-xl">🥦 Fresh Products</div>
          <div className="bg-green-50 p-4 rounded-xl">🚚 Fast Delivery</div>
          <div className="bg-green-50 p-4 rounded-xl">💰 Best Prices</div>
        </div>

      </div>
    </div>
  );
};

export default Grocery;