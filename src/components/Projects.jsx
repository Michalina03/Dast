// Projects.jsx
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import foto from "../img/foto.jpg"; // placeholder

const realizations = [
  { id: 1, title: "Projekt 1", date: "01.2024", place: "Warszawa", desc: "Kompleksowy remont mieszkania w stylu skandynawskim." },
  { id: 2, title: "Projekt 2", date: "02.2024", place: "Kraków", desc: "Modernizacja kuchni i strefy dziennej w kamienicy." },
  { id: 3, title: "Projekt 3", date: "03.2024", place: "Gdańsk", desc: "Nowoczesny ogród z tarasem z drewna egzotycznego." },
  { id: 4, title: "Projekt 4", date: "04.2024", place: "Wrocław", desc: "Aranżacja przestrzeni biurowej w stylu loftowym." },
  { id: 5, title: "Projekt 5", date: "05.2024", place: "Poznań", desc: "Metamorfoza łazienki z wykorzystaniem naturalnego kamienia." },
  { id: 6, title: "Projekt 6", date: "06.2024", place: "Łódź", desc: "Rewitalizacja elewacji budynku w centrum miasta." },
  { id: 7, title: "Projekt 7", date: "07.2024", place: "Sopot", desc: "Projekt wnętrza apartamentu wakacyjnego." },
  { id: 8, title: "Projekt 8", date: "08.2024", place: "Lublin", desc: "Przebudowa salonu z nową koncepcją oświetlenia." },
];

const Projects = () => {
  const sectionsRef = useRef([]);
  const location = useLocation();

  // Animacja pojawiania się sekcji
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("realizations__section--visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll do konkretnej sekcji po kliknięciu w About.jsx
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    if (type) {
      const section = document.getElementById(`project-${type}`);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <section className="realizations">
      {realizations.map((item, index) => (
        <div
          key={item.id}
          id={`project-${item.id}`}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`realizations__section ${
            index % 2 === 0
              ? "realizations__section--normal"
              : "realizations__section--reverse"
          }`}
        >
          <div className="realizations__image">
            <img src={foto} alt={`${item.title} - przed`} />
          </div>

          <div className="realizations__info">
            <div className="realizations__box">
              <h3 className="realizations__title">{item.title}</h3>
              <p className="realizations__desc">{item.desc}</p>
              <div className="realizations__meta">
                <span>{item.place}</span> | <span>{item.date}</span>
              </div>
            </div>
          </div>

          <div className="realizations__image">
            <img src={foto} alt={`${item.title} - po`} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
