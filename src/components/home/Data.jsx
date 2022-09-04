import React, { useState } from "react";
import img from "../../assets/6.png";
import { MdOutlineFrontHand } from "react-icons/md";
import img1 from "../../assets/18.png";

const Data = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="home__data">
      <h1 className="home__title">
        Jennifer Fulwiler <MdOutlineFrontHand className="home__hand" />
      </h1>
      <h3 className="home__subtitle">
        "Wychowała się w&nbsp;szczęśliwej, lecz ateistycznej rodzinie i&nbsp;nie
        narzucano jej żadnych wyborów życiowych. Boga nie potrzebowała. Nie był
        jej do szczęścia potrzebny. Więcej nawet – czuła do niego odrazę."
      </h3>
      <p className="home__description">
        "Powiedziałam do Boga: „Zabierz ten brak pokoju w moim życiu albo
        powiedz mi, co mam zrobić”. I&nbsp;pomysł po prostu przyszedł mi do
        głowy. Siedziałam przy biurku po skończonej audycji radiowej.
        I&nbsp;nagle pojawiło się bardzo nagłe i&nbsp;bardzo silne natchnienie,
        żeby robić stand-up. Od tamtego dnia nigdy nie obejrzałam się za
        siebie."
      </p>
      <a href="#" className="button button--flex" onClick={() => toggleTab(1)}>
        Więcej&nbsp; <i class="uil uil-arrow-up-right"></i>
      </a>

      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          <h3 className="services__modal-title">
            Jennifer Fulwiler, była ateistyczna blogerka, a obecnie katoliczka
          </h3>
          <p className="services__modal-description">
            Zanim została pisarką, pracowała jako programistka stron
            internetowych i ukończyła z wyróżnieniem University of Texas na
            wydziale reklamy ze szczególnym uwzględnieniem nowych mediów.
            Mieszka z mężem i sześciorgiem małych dzieci w Austin w Teksasie.
          </p>
          <ul className="services__modal-services grid">
            <img src={img1} alt="..." />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Data;

// https://marsz.info/byla-ateistka-teraz-mama-6-dzieci-opowiada-o-swoim-sukcesie-jako-stand-uper
