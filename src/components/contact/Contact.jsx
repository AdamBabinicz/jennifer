import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4zlh6v4",
      "template_dw6nnyq",
      form.current,
      "user_yESYTXvq2eaUzMYTx9oxz"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="kontakt">
      <h2 className="section__title">Skontaktuj się</h2>
      <span className="section__subtitle">Duchowa podróż</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Rozmawiaj ze mną</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">puaro@vp.pl </span>
              <a href="mailto:puaro@vp.pl" className="contact__button">
                Napisz
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">999-888-777 </span>
              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Heloo, more information!"
                className="contact__button"
              >
                Napisz
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123 </span>
              <a href="https://m.me/crypticalcoder" className="contact__button">
                Napisz
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Napisz do mnie</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nick</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Wpisz swój Nick lub Imię"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Wpisz swój Email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Wiadomość</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Wiadomość"
              ></textarea>
            </div>
            <button className="button button--flex">
              Wyślij&nbsp; <i class="uil uil-arrow-up-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
