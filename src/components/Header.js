import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";


const Header = () => {
  useEffect(() => {
    console.log('heheh')
  },[])
  
  const [btnState, setBtnState] = useState("login");

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link>Cart</Link></li>
          <button
            onClick={() => {
              btnState === "login"
                ? setBtnState("logout")
                : setBtnState("login");
            }}
          >
            {btnState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
