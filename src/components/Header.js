import { useState } from "react";
import { Link } from "react-router-dom";

//header

const HeaderComponent = () => {
  const [login, setLogin] = useState("Login");
  const setLoginStatus = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        className="company-logo"
        src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        alt="logo"
      />
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list-item">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="menu-list-item">
          <Link to="/about">About us</Link>
        </li>
        <li className="menu-list-item">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="menu-list-item">
          <button onClick={setLoginStatus} style={{ minWidth: "60px" }}>
            {login}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
