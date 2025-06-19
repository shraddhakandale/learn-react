import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:{
                name:"null",
                location:"test"
            }
        };
    }

    async componentDidMount(){
        console.log("component did mount")
        const data = await fetch("https://api.github.com/users/shraddhakandale");
        const json = await data.json()
        this.setState({
            user:{
                name: json.name,
                location: json.location
            }
        })
    }

    componentDidUpdate(){
        console.log("component update")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    render(){
        const {name, location} = this.state.user;
        return(
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: @sorkeyy</h2>
            </div>
        )
    }
}

export default UserClass;