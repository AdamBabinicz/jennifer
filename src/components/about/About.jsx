import React from "react";
import "./about.css";
import AboutImg from "../../assets/19.png";
import CV from "../../assets/jen.pdf";
import Info from "../about/Info";

const About = () => {
  return (
    <section className="about section" id="pisarka">
      <h2 className="section__title">Pisarka</h2>
      <span className="section__subtitle">Nawrócenie</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="..." className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Jej pierwsza książka, "Któż jak nie Bóg" - wspomnienie o przejściu
            na katolicyzm z wiecznego ateizmu, znalazła się w finale nagrody
            Goodreads Reader Choice Awards, w rankingu obok książek Hillary
            Clinton i Roba Lowe'a. Jej książka "Jeden piękny sen" była
            bestsellerem Wall Street Journal, trafiła do Top 25 Amazon i była
            bestsellerem nr 1 w Barnes and Noble.
          </p>
          <a
            download
            href={CV}
            className="button button--flex"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Ściągnij&nbsp; <i class="uil uil-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
