import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
              <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
                Dashboard
              </Link>
            </p>
          </li>

          <li>
            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
              <Link to="/orders" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(1)}>
                Orders
              </Link>
            </p>
          </li>

          <li>
            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
              <Link to="/holdings" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(2)}>
                Holdings
              </Link>
            </p>
          </li>

          <li>
            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
              <Link to="/positions" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(3)}>
                Positions
              </Link>
            </p>
          </li>

          <li>
            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
              <Link to="/funds" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(4)}>
                Funds
              </Link>
            </p>
          </li>

          <li>
            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
              <Link to="/apps" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(5)}>
                Apps
              </Link>
            </p>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
