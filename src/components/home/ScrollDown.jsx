import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#pisarka" className="about__scroll-button button--flex">
        <div className="arr">
          <i class="uil uil-angle-double-down wheel"></i>
        </div>
        <span className="home__scroll-name">&nbsp;Przewiń do dołu</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
