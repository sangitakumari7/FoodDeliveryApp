import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 flex items-center justify-center px-6 py-10">
      
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
        
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mb-4">
          Oops!
        </h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Something went wrong 😢
        </h2>

        <p className="text-gray-500 mb-6">
          We couldn't find the page you're looking for or an unexpected error has occurred.
        </p>

        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <p className="text-red-500 font-medium">
            {err?.status} : {err?.statusText}
          </p>
        </div>

        <Link to="/">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-md">
            Go Back Home 🏠
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Error;