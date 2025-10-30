import foto from "../img/foto.jpg";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const sectionRef = useRef(null);
  const startedRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) {
      startCounters();
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

  const handleClick = (id) => {
    navigate(`/realizacje?type=${id}`);
  };

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

  return (
    <section className="about" aria-labelledby="about-title" ref={sectionRef}>
      <div className="about__top">
        <div className="about__media">
          <img src={foto} alt="Zdjęcie firmy" className="about__image" />
        </div>

        <div className="about__content">
          <h2 id="about-title" className="about__title">O naszej firmie</h2>
          <p className="about__eyebrow">Usługi budowlane i transportowe · Mazowieckie</p>

          <div className="about__text about__text--bigger">
            <p>
              Nasza firma specjalizuje się w wyburzeniach, rozbiórkach, wykopach,
              budowie i utwardzaniu nawierzchni, usługach sprzętem ciężkim oraz
              transporcie materiałów sypkich. Działamy szybko, sprawnie i zawsze
              z naciskiem na bezpieczeństwo i terminowość.
            </p>
            <p>
              Oferujemy kompleksowe wsparcie inwestycyjne – od doradztwa technicznego,
              przez prace ziemne, po transport i sprzedaż materiałów. Dzięki własnemu
              zapleczu sprzętowemu realizujemy zlecenia niezależnie od skali projektu.
            </p>
          </div>

          <div className="about__actions">
            <button className="about__btn about__btn--primary">Zobacz ofertę</button>
            <button className="about__btn about__btn--ghost">Sprawdź materiały</button>
          </div>
        </div>
      </div>

      <div className="about__features">
        <div className="about__container">
          <article className="about__feature">
            <div className="about__feature-top">
              <svg
                className="about__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h2v6H3zM19 5h2v14h-2zM7 9h2v10H7zM13 3h2v16h-2z" />
              </svg>
            </div>
            <h3 className="about__feature-title">Własny sprzęt</h3>
            <p className="about__feature-desc">
              Inwestujemy w najlepsze technologie dla optymalnych wyników.
            </p>
          </article>

          <article className="about__feature about__feature--counter">
            <div className="about__feature-top">
              <div className="about__counter">
                <span className="about__counter-number">{years}</span>
              </div>
            </div>
            <h3 className="about__feature-title">Doświadczenie</h3>
            <p className="about__feature-desc">8 lat doświadczenia</p>
          </article>

          <article className="about__feature about__feature--counter">
            <div className="about__feature-top">
              <div className="about__counter">
                <span className="about__counter-number">{clients}</span>
                <span className="about__counter-suffix">{clients >= 100 ? "+" : ""}</span>
              </div>
            </div>
            <h3 className="about__feature-title">Zadowoleni klienci</h3>
            <p className="about__feature-desc">100+ zadowolonych klientów</p>
          </article>

          <article className="about__feature">
            <div className="about__feature-top">
              <svg
                className="about__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15 8l6 .5-4.5 3.5L18 20l-6-4-6 4 1.5-8L3 8.5 9 8z" />
              </svg>
            </div>
            <h3 className="about__feature-title">Kompleksowe usługi</h3>
            <p className="about__feature-desc">
              Pełny zakres usług z gwarancją spokoju ducha.
            </p>
          </article>
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
