import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import foto from "../img/foto.jpg";
import refe from "../img/Referencje_wzór.png";

function About() {
  
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const phone = "+48 505 357 689";



  const services = [
    {
      id: 1,
      title: "Roboty ziemne i wykopy",
      bullets: ["Wykopy pod budynki", "Korytowanie pod drogi", "Prace ziemne"],
    },
    {
      id: 2,
      title: "Wyburzenia i kruszenie betonu",
      bullets: ["Kruszenie betonu", "Rozbiórki obiektów", "Recykling gruzu"],
    },
    {
      id: 3,
      title: "Budowa nawierzchni i utwardzenie terenu",
      bullets: ["Utwardzenia placów", "Budowa dróg lokalnych", "Zagęszczanie podłoża"],
    },
    {
      id: 4,
      title: "Usługi sprzętem ciężkim",
      bullets: ["Koparki, walce, spycharki", "Operacje zdalne", "Transport na placu budowy"],
    },
    {
      id: 5,
      title: "Transport i wywóz materiałów",
      bullets: ["Transport kruszyw", "Wywóz gruzu", "Logistyka materiałowa"],
    },
    {
      id: 6,
      title: "Sprzedaż materiałów",
      bullets: ["Piasek, żwir, kruszywo", "Dostawa do klienta", "Doradztwo w doborze"],
    },
  ];
    const handleClick = (id) => {
      navigate(`/realizacje?type=${id}`);
    };
  const references = [refe, refe, refe, refe];

  return (
    <section className="about" aria-labelledby="about-title" ref={sectionRef}>
      <div className="about__top">
        <div className="about__media">
          <img src={foto} alt="Zdjęcie firmy" className="about__image" />
        </div>

        <div className="about__content">
          <h2 id="about-title" className="about__title">O naszej firmie</h2>
          <p className="about__eyebrow">Realizacja ogrodów, warsztat, sprzęt na wynajem · Mazowieckie</p>

          <div className="about__text about__text--bigger">
            <p> Nasza firma specjalizuje się w realizacji ogrodów – od projektu po pełne wykonanie. Tworzymy estetyczne i funkcjonalne przestrzenie zielone, dopasowane do potrzeb klientów, z wykorzystaniem nowoczesnych technologii i sprawdzonych rozwiązań. </p> <p> Posiadamy własny warsztat, w którym dbamy o profesjonalny serwis i utrzymanie naszego sprzętu w doskonałej kondycji. Dzięki temu możemy gwarantować niezawodność i wysoką jakość realizowanych prac. </p> <p> Oferujemy również wynajem sprzętu ogrodniczego i budowlanego. Dysponujemy szeroką gamą maszyn i narzędzi, które pozwalają na sprawną realizację zarówno mniejszych, jak i dużych projektów terenowych. </p>
          </div>

          <div className="about__actions">
            <button
        className="about__btn about__btn--primary"
        onClick={() => navigate("/oferta")}
        aria-label="Zobacz ofertę"
      >
        Zobacz ofertę
      </button>

      <button
        className="about__btn about__btn--ghost"
        onClick={() => window.location.href = `tel:${phone}`}
        aria-label="Zadzwoń"
      >
        Zadzwoń
      </button>
          </div>
        </div>
      </div>

      <div className="about-references">
        <div className="about-references__container">
          <div className="about-references__header">
            <h2 className="about-references__title">Referencje</h2>
            <p className="about-references__subtitle">
              Dast – Opinie i referencje Klientów
            </p>
          </div>

          <div className="about-references__grid">
            {references.map((item, index) => (
              <div className="about-references__item" key={index}>
                <img
                  src={item}
                  alt={`Referencja ${index + 1}`}
                  className="about-references__image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* --- SEKCJA REALIZACJI --- */}
      <div className="about__services" aria-label="Nasze realizacje">
        <h2 className="about__services-title">Nasze realizacje</h2>
        <p className="about__services-subtitle">
          Poznaj przykładowe realizacje oraz zakres naszych usług.
        </p>

        <div className="about__services-inner">
          {services.map((item) => (
            <article
              key={item.id}
              className="about__card"
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="about__card-media">
                <img src={foto} alt={item.title} className="about__card-image" />
              </div>
              <div className="about__card-body">
                <h3 className="about__card-title">{item.title}</h3>
                <ul className="about__card-list">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="about__card-item">• {b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
