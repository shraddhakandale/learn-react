import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);

    // subscribe to store
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    return (
        <div className="header flex justify-between items-center mb-8 shadow-2xs bg-white">
            <div className="header-logo-container flex items-center">
                <img alt="logo" className="header-logo w-16 h-16" src={ LOGO_URL }/>
                <div className="header-logo-name">Cravings cracker</div>
            </div>
            <div className="navbar pr-8">
                <ul className="flex gap-4 items-center">
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart - {cartItems.length}</Link></li>
                    <button onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
                    }}>{btnName}</button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;