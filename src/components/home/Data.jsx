import React from "react";
import img from "../../assets/6.png";
import { MdOutlineFrontHand } from "react-icons/md";

const Data = () => {
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
      <a href="/" className="button button--flex">
        Więcej&nbsp; <i class="uil uil-arrow-up-right"></i>
      </a>
    </div>
  );
};

export default Data;

// https://marsz.info/byla-ateistka-teraz-mama-6-dzieci-opowiada-o-swoim-sukcesie-jako-stand-uper
