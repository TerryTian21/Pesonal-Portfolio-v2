import React from "react";
import "./navbar.css";

function Navbar({ activePage, onNavClick, position }) {
  const navLinks = ["home", "about", "workout", "adventures"];

  return (
    <nav className={position === "home" ? "navbar-home" : "navbar"}>
      <div className="mx-auto flex items-center justify-between">
        <a href="/home" className="logo">
          Terry Tian
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <div
              key={link}
              className={activePage === link ? "nav-link-current" : "nav-link"}
              onClick={() => onNavClick(link)}
            >
              <div className="link">
                <a href={`/${link}`}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
