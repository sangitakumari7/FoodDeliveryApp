import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sangeetakumari");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;

    if (!userInfo) {
      return (
        <div className="flex justify-center items-center min-h-[60vh]">
          <h1 className="text-xl font-semibold text-gray-500 animate-pulse">
            Loading Profile...
          </h1>
        </div>
      );
    }

    const { login, location, id, avatar_url, html_url } = userInfo;

    return (
      <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
        
        <div className="bg-white rounded-3xl shadow-xl p-8 w-80 text-center border border-blue-100">
          
          <img
            src={avatar_url}
            alt="user"
            className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
          />

          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {login}
          </h2>

          <p className="text-blue-500 text-sm mb-4">
            GitHub User
          </p>

          <div className="text-gray-600 space-y-2 text-sm">
            <p>🆔 ID: {id}</p>
            <p>📍 {location || "Not Available"}</p>
          </div>

          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm transition"
          >
            View Profile
          </a>

        </div>
      </div>
    );
  }
}

export default UserClass;