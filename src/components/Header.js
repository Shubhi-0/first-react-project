import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnState, setBtnState] = useState("login");

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
