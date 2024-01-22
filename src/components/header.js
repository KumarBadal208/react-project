import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="header">
            <div className="header-logo">

            </div>
            <div className="header__nav-items">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>cart</li>
                <li>profile</li>
            </ul>
            </div>
        </div>
    )
};

export default Header;