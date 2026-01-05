import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState({ username: "USERID" }); // default
  const profileRef = useRef(null);

  const handleMenuClick = (index) => setSelectedMenu(index);

  // Fetch user from localStorage
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const usernameFromQuery = params.get("username");
  if (usernameFromQuery) {
    setUser({ username: usernameFromQuery });
  }
}, []);

  const handleProfileClick = () =>
    setIsProfileDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    // Clear user info from localStorage
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/login";
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div
      className="menu-container p-3"
      style={{ width: "220px", borderRight: "1px solid #ddd" }}
    >
      <img
        src="logo.png"
        style={{ width: "50px" }}
        alt="Logo"
        className="mb-3 mt-3"
      />

      <div className="menus mt-3">
        <ul className="list-unstyled mt-4">
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile & Dropdown */}
        <div ref={profileRef} className="">
          <div
            className="d-flex align-items-center gap-2 p-2 rounded hover-shadow"
            style={{ cursor: "pointer", backgroundColor: "#f8f9fa" }}
            onClick={handleProfileClick}
          >
            <div
              className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "35px", height: "35px", fontWeight: "bold" }}
            >
              {user.username?.charAt(0).toUpperCase() || "U"}
            </div>
            <p className="mb-0">{user.username || "USERID"}</p>
          </div>

          {isProfileDropdownOpen && (
            <div
              className="dropdown-menu show shadow-sm position-absolute"
              style={{ right: 0, minWidth: "140px" }}
            >
              <button
                type="button"
                className="dropdown-item"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
