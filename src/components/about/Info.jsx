import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-calendar about__icon"></i>
        <h3 className="about__title">Data urodzenia</h3>
        <span className="about__subtitle">12 stycznia 1977</span>
      </div>
      <div className="about__box">
        <i className="bx bx-pin about__icon"></i>
        <h3 className="about__title">Miejsce urodzenia</h3>
        <span className="about__subtitle">Stany Zjednoczone</span>
      </div>
      <div className="about__box about__icon">
        <i className="bx bx-book-open"></i>
        <h3 className="about__title">Zawód</h3>
        <span className="about__subtitle">Komiczka, autorka</span>
      </div>
    </div>
  );
};

export default Info;

// https://quickcelebfacts.com/bio/jen-fulwiler
