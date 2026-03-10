import React from "react";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);

       this.state = {
       userInfo:{
        name:"Sangita Roy",
        location:"Default",
       }
       }
    }

  async componentDidMount(){

    const data = await fetch("https://api.github.com/users/sangeetakumari");
    const json = await data.json();
    
     this.setState({
        userInfo: json,
     });

    console.log(json);
  }

    render() {

        const {login, location,id} = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>ID: {id}</h1>
                <h2>Name : {login}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact: sangita@123</h4>
            </div> 
        )
    }
}

export default UserClass;