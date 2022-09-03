import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="standup">
      <h2 className="section__title">Stand-Up</h2>
      <span className="section__subtitle">Moja duchowość</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__buton qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil uil-book-alt qualification__icon"></i>
            Książki
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__buton qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Stand-Up
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Twój niebieski płomień</h3>
                <span className="qualification__subtitle">
                  Porzuć poczucie winy i&nbsp;rób to, co sprawia, że ​​ożywasz
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> kwiecień - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Amazon Prime</h3>
                <span className="qualification__subtitle">
                  Niegrzeczny kącik
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Komedia, sztuka,
                  rozrywka i kultura, religia
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Jeden piękny sen</h3>
                <span className="qualification__subtitle">
                  Niesamowita opowieść o rodzinnym chaosie, osobistych
                  namiętnościach i&nbsp;mówieniu „tak” im obojgu
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> maj - 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Apple TV</h3>
                <span className="qualification__subtitle">
                  Niegrzeczny kącik
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Komedia - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Któż jak nie Bóg</h3>
                <span className="qualification__subtitle">
                  Jak namiętnie szukałam szczęścia i&nbsp;przypadkowo je
                  znalazłam
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> sierpień - 2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Google Play</h3>
                <span className="qualification__subtitle">
                  Niegrzeczny kącik
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Komedia
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Pandora</h3>
                <span className="qualification__subtitle">
                  Niegrzeczny kącik
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Komedia
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Amazon Prime</h3>
                <span className="qualification__subtitle">
                  Niegrzeczny kącik
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Komedia, sztuka,
                  rozrywka i kultura, religia
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
