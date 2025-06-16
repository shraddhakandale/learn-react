import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:1
        };
    }
    render(){
        const {name} = this.props;
        const{count, count2} = this.state;
        
        return(
            <div className="user-card">
                <h2>Count: {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increment</button>
                <h2>Count2: {count2}</h2>
                <h2>Name: {name}</h2>
                <h2>Location: Pune</h2>
                <h2>Contact: @sorkeyy</h2>
            </div>
        )
    }
}

export default UserClass;