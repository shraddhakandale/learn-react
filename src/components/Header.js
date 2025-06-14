import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    return (
        <div className="header">
            <div className="header-logo-container">
                <img alt="logo" className="header-logo" src={ LOGO_URL }/>
                <div className="header-logo-name">Cravings cracker</div>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;