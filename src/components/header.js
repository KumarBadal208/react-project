import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{

    let status = useOnlineStatus();
    console.log(status);

    return (
        <div className="header">
            <div className="header-logo">

            </div>
            <div className="header__nav-items">
            <ul>
                <li>Online Status : {status===true ? "true" : "false"}</li>
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