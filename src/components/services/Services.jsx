import React, { useState } from "react";
import "./services.css";
import img1 from "../../assets/24.jpg";
import img2 from "../../assets/25.jpg";
import img3 from "../../assets/26.jpg";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="aktywność">
      <h2 className="section__title">Aktywność</h2>
      <span className="section__subtitle">Moja duchowość</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Felietonistka <br /> magazynu "Envoy"
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Zobacz więcej
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                Historia mojego nawrócenia
              </h3>
              <p className="services__modal-description">
                Z radością ogłaszam, że napisałam artykuł do bieżącego wydania
                magazynu Envoy. To najbardziej wyczerpująca wersja mojej
                historii nawrócenia, jaką dotychczas napisałam.
              </p>
              <ul className="services__modal-services grid">
                <img src={img1} alt="..." />
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Gość w sieciach <br /> "Relevant Radio" i "EWTN Radio"
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button">
            Zobacz więcej
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Jej historia</h3>
              <p className="services__modal-description">
                Jest stałym gościem w sieciach Relevant Radio i EWTN Radio, a
                jej historia pojawiła się w telewizji EWTN.
              </p>
              <ul className="services__modal-services grid">
                <img src={img2} alt="..." />
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Osobisty blog <br /> ConversionDiary.com
            </h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">
            Zobacz więcej
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Blog</h3>
              <p className="services__modal-description">
                ponad 300 000 odsłon każdego miesiąca, Jennifer zwyciężyła w
                kategoriach „Najlepszy blog pisany”, „Najbardziej duchowy blog”,
                „Najlepszy blog kobiety” i „People’s Choice Blog” w katolickich
                nagrodach nowych mediów.
              </p>
              <ul className="services__modal-services grid">
                <img src={img3} alt="..." />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
