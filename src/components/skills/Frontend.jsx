import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Blogerka</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">"Dziennik nawróceń"</h3>
              <span className="skills__level"></span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Felietony</h3>
              <span className="skills__level">ogólnokrajowa gazeta</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Krajowy Rejestr Katolicki</h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Pamiętnik</h3>
              <span className="skills__level">Ignatius Press</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Frontend;

// https://www.ncregister.com/interview/catholic-stand-up-comic-jen-fulwiler-on-the-true-the-good-and-the-beautifully-hilarious
