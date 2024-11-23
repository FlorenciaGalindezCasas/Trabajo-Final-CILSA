import React from "react";
import "../header/Header.css";
import { logout } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex search" role="search">
          <button className="btn" type="submit">
            <IoSearchOutline />
          </button>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
        </form>
        <div className="profile d-flex">
          <img
            src="./public/assets/img/personProfile.ico"
            className="rounded-circle"
            alt="Avatar"
          />
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
