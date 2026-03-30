import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  useEffect(() => {
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-linear-to-br from-purple-100 via-white to-purple-200 p-6">
      
      <div className="bg-white rounded-3xl shadow-xl p-8 w-80 text-center border border-purple-100">
        
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          {name?.charAt(0)}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {name}
        </h2>

        <p className="text-purple-500 text-sm mb-4">
          Frontend Developer
        </p>

        <div className="text-gray-600 space-y-2 text-sm">
          <p>📍 Bihar, India</p>
          <p>📧 sangeeta@developer.com</p>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm transition">
            Follow
          </button>

          <button className="border border-purple-500 text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-full text-sm transition">
            Message
          </button>
        </div>

      </div>
    </div>
  );
};

export default User;