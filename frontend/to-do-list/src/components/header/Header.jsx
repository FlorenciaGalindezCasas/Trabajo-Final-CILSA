import React from 'react'
import "../header/Header.css"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex search" role="search">
          <button className="btn" type="submit">
          </button>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="profile d-flex">
          <img
            className="rounded-circle"
            alt="Avatar"
          />
          <button className="btn btn-outline-danger" >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header