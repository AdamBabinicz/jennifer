import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Jennifer Fulwiler</h2>
        <ul className="footer__list">
          <li>
            <a href="#pisarka" className="footer__link">
              Pisarka
            </a>
          </li>
          <li>
            <a href="#standup" className="footer__link">
              Stand-Up
            </a>
          </li>
          <li>
            <a href="#powiedziałam" className="footer__link">
              Powiedziałam
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/jenniferfulwiler"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://twitter.com/jenfulwiler?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/jen.fulwiler"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">
          Radom, 2022 - {new Date().getFullYear()}.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
