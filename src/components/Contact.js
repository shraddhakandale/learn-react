// const Contact = () => {
//     return (
//         <h1>This is contact us page</h1>
//     )
// }

// export default Contact;

import React from "react";

class Contact extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        console.log("component did mount contact")
    }

    render(){
        return <div>Contact page</div>
    }
}

export default Contact;