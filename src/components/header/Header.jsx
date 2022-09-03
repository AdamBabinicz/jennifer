import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  // Change Background Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  // Toggle Menu
  const [Toggle, showMenu] = useState(false);

  const [activeNav, setActiveNav] = useState("#start");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          jen
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#start"
                onClick={() => setActiveNav("#start")}
                className={
                  activeNav === "#start" ? "nav__link active-link" : "nav-link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Start
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#pisarka"
                onClick={() => setActiveNav("#pisarka")}
                className={
                  activeNav === "#pisarka"
                    ? "nav__link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-user nav__icon"></i> Pisarka
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#służba"
                onClick={() => setActiveNav("#służba")}
                className={
                  activeNav === "#służba" ? "nav__link active-link" : "nav-link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Służba
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#aktywność"
                onClick={() => setActiveNav("#aktywność")}
                className={
                  activeNav === "#aktywność"
                    ? "nav__link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Aktywność
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#standup"
                onClick={() => setActiveNav("#standup")}
                className={
                  activeNav === "#standup"
                    ? "nav__link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Stand-Up
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#kontakt"
                onClick={() => setActiveNav("#kontakt")}
                className={
                  activeNav === "#kontakt"
                    ? "nav__link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Kontakt
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
