import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const[count2] = useState(1);
  return (
    <div className="user-card">
        <h2>Count: {count}</h2>
        <button onClick={()=>{
            setCount(count => count + 1)
        }}>Increment</button>
        <h2>Count2: {count2}</h2>
      <h2>Name: {name}</h2>
      <h2>Location: Pune</h2>
      <h2>Contact: @sorkeyy</h2>
    </div>
  );
};

export default User;
