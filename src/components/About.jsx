import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1> About Us</h1>
                <p>This is all about us.</p>
                <UserClass/>
            </div>
        
    );
}
}

export default About;
