import React, { useState } from "react";
import { RxNotionLogo } from "react-icons/rx";
import { RiShieldUserFill } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./Layout.css";

function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container-fluid header flex">
      <p className="pt-3">
        <RxNotionLogo size={25} />
        &nbsp; PROJECT &nbsp;<span>NIXON</span>
      </p>

      <div className={showMenu ? "hide-mobile" : " show-mobile"}></div>

      <ul
        className="menu flex pt-3"
        id={showMenu ? "hide-mobile-menu" : "mobile-menu"}
      >
        <li>
          <NavLink>
            <RiShieldUserFill />
            Nixon Varghese
          </NavLink>
        </li>
        <li>
          <button className="btn">
            <NavLink>Login</NavLink>
          </button>
        </li>
        <li>
          <NavLink>Profile</NavLink>
        </li>

        <li>
          <button className="btn">
            <NavLink>Logout</NavLink>
          </button>
        </li>
      </ul>

      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? <AiOutlineBars size={25} /> : <CgClose size={25} />}
      </div>
    </div>
  );
}

export default Header;
