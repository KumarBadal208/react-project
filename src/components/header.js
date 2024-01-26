import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";

const Header = ()=>{

    let status = useOnlineStatus();
    console.log(status);

    return (
        <div className="header flex bg-gray-200 justify-between">
            <div className="header-logo ">
                <img className="w-20"
                src={LOGO_URL}></img>
            </div>
            <div className="header__nav-items flex items-center">
                <ul className="flex align-middle m-2">
                    <li className="p-2">Online Status : {status===true ? "true" : "false"}</li>
                    <li className="p-2"><Link to="/">home</Link></li>
                    <li className="p-2"><Link to="/about">About Us</Link></li>
                    <li className="p-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2">profile</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;