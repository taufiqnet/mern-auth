import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        {token ? (
          <>
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a onClick={handleLogout} className="cursor-pointer">
                  Logout
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
