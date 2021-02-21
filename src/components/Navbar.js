import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu">
          <Link to="/" className="navbar-logo">
            PanVel <i className="fas fa-plus fa-lg" />
          </Link>
          <div className="menu-icon">
            <i className={click ? " fas fa-times" : "fas fa-bars"} />
            <strong>CATEGORIAS</strong>
          </div>
        </div>

        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder=" O você procura?"
          />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>

        <div className="profile">
          <div className="user">
            <i className="fa fa-user" aria-hidden="true"></i>
            <strong>ENTRAR</strong>
          </div>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
