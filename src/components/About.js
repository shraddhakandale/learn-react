import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";
const About = () => {
  return (
    <div>
      {/* <User name={"Shraddha function prop"} /> */}
      <UserClass name={"Shraddha class prop"} />
      <userContext.Consumer>
        {({loggedInUser})=><h1>Username : {loggedInUser}</h1>}
      </userContext.Consumer>
    </div>
  );
};

export default About;
