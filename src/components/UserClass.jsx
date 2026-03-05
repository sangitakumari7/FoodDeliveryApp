import React from "react";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);

        console.log(props);
    }



    render() {
        return (
            <div className="user-card">
               <h2>Sangeeta Kumari</h2>
                <h3>Frontend Developer</h3>
                <h4>Contact: sangeeta@developer.com</h4>
            </div> 
        )
    }
}

export default UserClass;