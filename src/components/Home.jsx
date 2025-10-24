import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import foto from "../img/foto.jpg";

export default function Home(){ 
const [years, setYears] = useState(0); // licznik 0 -> 8
  const [clients, setClients] = useState(0); // licznik 0 -> 100+

  // Refs to control animation (start once when visible)
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // IntersectionObserver żeby uruchomić liczniki gdy komponent wejdzie w viewport
    const el = sectionRef.current;
    if (!el) {
      startCounters(); // fallback
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            startCounters();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);

    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startCounters() {
    // years: 0 -> 8 (stop at 8)
    const durationYears = 900;
    const startTime = performance.now();
    function stepYears(now) {
      const t = Math.min(1, (now - startTime) / durationYears);
      const value = Math.floor(t * 8);
      setYears(value);
      if (t < 1) requestAnimationFrame(stepYears);
      else setYears(8);
    }
    requestAnimationFrame(stepYears);

    // clients: 0 -> 100+ (we animate to 100 then add +)
    const durationClients = 1400;
    const startTime2 = performance.now();
    function stepClients(now) {
      const t = Math.min(1, (now - startTime2) / durationClients);
      const value = Math.floor(t * 100);
      setClients(value);
      if (t < 1) requestAnimationFrame(stepClients);
      else setClients(100);
    }
    requestAnimationFrame(stepClients);
  }

  return (
    <>
    <section className="home" ref={sectionRef} aria-label="Sekcja główna">
      <div className="home__hero">
        <div className="home__hero-inner">
          <div className="home__text">
            <h1 className="home__title">Roboty Ziemne</h1>
            <p className="home__subtitle">
              Oferujemy profesjonalne roboty ziemne i wykopy, które zapewnią
              stabilne fundamenty dla Twojej inwestycji.
            </p>
            <div className="home__cta">
              <button className="home__btn home__btn--primary">Poznaj ofertę</button>
              <button className="home__btn home__btn--outline">Zadzwoń: 577 573 985</button>
            </div>
          </div>
          <div className="home__hero-media">
            <img src={foto} alt="Maszyna budowlana" className="home__hero-image" />
          </div>
        </div>

      </div>

      <div className="home__features">
        <div className="home__container">
          <article className="home__feature home__feature--counter">
            <div className="home__feature-top">
              <div className="home__counter" aria-live="polite" aria-atomic="true">
                <span className="home__counter-number">{years}</span>
                <span className="home__counter-suffix"> {years >= 8 ? "" : ""}</span>
              </div>
            </div>
            <h3 className="home__feature-title">Doświadczenie</h3>
            <p className="home__feature-desc">8 lat doświadczenia</p>
          </article>

          <article className="home__feature">
            <div className="home__feature-top">
              {/* Ikona druga (SVG) */}
              <svg
                className="home__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="false"
                focusable="false"
              >
                <path d="M3 13h2v6H3zM19 5h2v14h-2zM7 9h2v10H7zM13 3h2v16h-2z" />
              </svg>
            </div>
            <h3 className="home__feature-title">Własny sprzęt</h3>
            <p className="home__feature-desc">Inwestujemy w najlepsze technologie dla optymalnych wyników.</p>
          </article>

          <article className="home__feature home__feature--counter">
            <div className="home__feature-top">
              <div className="home__counter" aria-live="polite" aria-atomic="true">
                <span className="home__counter-number">{clients}</span>
                <span className="home__counter-suffix"> {clients >= 100 ? "+" : ""}</span>
              </div>
            </div>
            <h3 className="home__feature-title">Zadowoleni klienci</h3>
            <p className="home__feature-desc">100+ zadowolonych klientów</p>
          </article>

          <article className="home__feature">
            <div className="home__feature-top">
              {/* Ikona czwarta (SVG) */}
              <svg
                className="home__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="false"
                focusable="false"
              >
                <path d="M12 2L15 8l6 .5-4.5 3.5L18 20l-6-4-6 4 1.5-8L3 8.5 9 8z" />
              </svg>
            </div>
            <h3 className="home__feature-title">Kompleksowe usługi</h3>
            <p className="home__feature-desc">Pełny zakres usług z gwarancją spokoju ducha.</p>
          </article>
        </div>
      </div>
    </section>


      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
