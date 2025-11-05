import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import foto from "../img/garden.jpg";
import foto2 from "../img/machine.jpg";
import unia from "../img/unia.jpg";

export default function Home(){ 

  // Refs to control animation (start once when visible)
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  function startCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = 200; // im większa liczba, tym wolniej

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}


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
        <div className="home__hero-inner">
          <div className="home__text">
            <h1 className="home__title">Realizacja ogrodów - Warsztat  Wynajem Sprzętu </h1>
            <p className="home__subtitle">
              Dostarczamy nowoczesny sprzęt i kompleksowe wsparcie dla Twoich projektów. Od wynajmu maszyn, przez serwis i naprawy w naszym warsztacie, po realizację ogrodów – wszystko, czego potrzebujesz, w jednym miejscu
            </p>
            {/* <div className="home__cta">
              <button className="home__btn home__btn--primary">Poznaj ofertę</button>
              <button className="home__btn home__btn--outline">Zadzwoń: 577 573 985</button>
            </div> */}
          </div>
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
      </div>
      <div className="home__flags">
       <img
        src={unia}
        alt="Unia Europejska - Europejski Fundusz Rozwoju Regionalnego"
        className="home__flags-image"
        />
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
