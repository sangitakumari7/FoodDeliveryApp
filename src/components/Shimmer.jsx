const Shimmer = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {Array(8).fill("").map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 animate-pulse"
          >
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>

            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Shimmer;