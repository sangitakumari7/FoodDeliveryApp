import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="min-h-screen bg-linear-to-br from-orange-100 via-red-100 to-pink-100 flex items-center justify-center px-6 py-10">
        
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-10">
          
          <h1 className="text-4xl font-extrabold text-center bg-linear-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mb-6">
            About Us
          </h1>

          <p className="text-gray-600 text-lg text-center leading-relaxed mb-8">
            Welcome to our food ordering platform 🍔. We are passionate about delivering
            delicious meals from your favorite restaurants right to your doorstep.
            Our mission is to make food ordering fast, easy, and enjoyable.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            
            <div className="bg-linear-to-r from-orange-400 to-red-400 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold mb-2">🚀 Our Mission</h2>
              <p>
                To connect people with the best restaurants and provide a seamless
                food ordering experience.
              </p>
            </div>

            <div className="bg-linear-to-r from-pink-400 to-purple-400 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold mb-2">💡 Our Vision</h2>
              <p>
                To become the most loved food delivery platform with quality,
                speed, and reliability.
              </p>
            </div>

          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Meet Our Developer
            </h2>

            <div className="flex justify-center">
              <UserClass />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;