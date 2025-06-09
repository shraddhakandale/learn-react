import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
        <div className="header">
            <div className="header-logo-container">
                <img alt="logo" className="header-logo" src={ LOGO_URL }/>
                <div className="header-logo-name">Cravings cracker</div>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;