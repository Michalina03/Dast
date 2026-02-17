import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import foto from "../img/garden.jpg";
import foto2 from "../img/machine.jpg";

export default function Home(){ 

  // Refs to control animation (start once when visible)
  const sectionRef = useRef(null);
  const startedRef = useRef(false);
  
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);


   useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            startCounters();
            observer.unobserve(el); // ✅ poprawione
          }
        });
      },
      {
        threshold: 0.1, // licznik uruchamia się, gdy sekcja w 30% widoczna
      }
    );
  
    observer.observe(el); // ✅ poprawione
  
    return () => observer.disconnect();
  }, []);
  
    function startCounters() {
      // animacja liczby lat
      const durationYears = 1000;
      const startTime = performance.now();
  
      function stepYears(now) {
        const t = Math.min(1, (now - startTime) / durationYears);
        setYears(Math.floor(t * 8));
        if (t < 1) requestAnimationFrame(stepYears);
        else setYears(8);
      }
      requestAnimationFrame(stepYears);
  
      // animacja liczby klientów
      const durationClients = 1400;
      const startTime2 = performance.now();
  
      function stepClients(now) {
        const t = Math.min(1, (now - startTime2) / durationClients);
        setClients(Math.floor(t * 100));
        if (t < 1) requestAnimationFrame(stepClients);
        else setClients(100);
      }
      requestAnimationFrame(stepClients);
    }
  



  const [currentImage, setCurrentImage] = useState(0);
  const images = [foto, foto2]; // tablica zdjęć

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 6000); // zmiana co 3 sekundy

    return () => clearInterval(interval); // czyszczenie przy odmontowaniu
  }, []);

   const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
  };

  return (
    <>
    <section className="home" ref={sectionRef} aria-label="Sekcja główna">
      <div className="home__hero">
          <div className="home__hero-media">
            <img
                src={images[currentImage]}
                alt="Maszyna budowlana"
                className="home__hero-image"
              />
              <button className="home__hero-arrow home__hero-arrow--left" onClick={prevImage}>
    ◀
  </button>
  <button className="home__hero-arrow home__hero-arrow--right" onClick={nextImage}>
    ▶
  </button>
          </div>
        </div>


      <div className="home__features">
        <div className="home__container">
          <article className="home__feature">
            <div className="home__feature-top">
              <svg
                className="home__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h2v6H3zM19 5h2v14h-2zM7 9h2v10H7zM13 3h2v16h-2z" />
              </svg>
            </div>
            <h3 className="home__feature-title">Własny sprzęt</h3>
            <p className="home__feature-desc">
              Inwestujemy w najlepsze technologie dla optymalnych wyników.
            </p>
          </article>

          <article className="home__feature home__feature--counter">
            <div className="home__feature-top">
              <div className="home__counter">
                <span className="home__counter-number">{years}</span>
                <span className="home__counter-suffix">
                  {years >= 8 ? "   lat" : ""}
                </span>
              </div>
            </div>
            <h3 className="home__feature-title">Doświadczenie</h3>
            <p className="home__feature-desc">8 lat doświadczenia</p>
          </article>

          <article className="home__feature home__feature--counter">
            <div className="home__feature-top">
              <div className="home__counter">
                <span className="home__counter-number">{clients}</span>
                <span className="home__counter-suffix">
                  {clients >= 100 ? "+" : ""}
                </span>
              </div>
            </div>
            <h3 className="home__feature-title">Zadowoleni klienci</h3>
            <p className="home__feature-desc">100+ zadowolonych klientów</p>
          </article>

          <article className="home__feature">
            <div className="home__feature-top">
              <svg
                className="home__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15 8l6 .5-4.5 3.5L18 20l-6-4-6 4 1.5-8L3 8.5 9 8z" />
              </svg>
            </div>
            <h3 className="home__feature-title">Kompleksowe usługi</h3>
            <p className="home__feature-desc">
              Pełny zakres usług z gwarancją spokoju ducha.
            </p>
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
