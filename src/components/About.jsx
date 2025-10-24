import React from 'react'
import foto from "../img/foto.jpg";

function About() {
  return (
     <section className="about" aria-labelledby="about-title">
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

      {/* --- SEKCJA REALIZACJI --- */}
      <div className="about__services" aria-label="Nasze realizacje">
        <h2 className="about__services-title">Nasze realizacje</h2>
        <p className="about__services-subtitle">
          Poznaj przykładowe realizacje oraz zakres naszych usług.
        </p>

        <div className="about__services-inner">
          {[
            { title: "Roboty ziemne i wykopy", bullets: ["Wykopy pod budynki", "Korytowanie pod drogi", "Prace ziemne"] },
            { title: "Wyburzenia i kruszenie betonu", bullets: ["Kruszenie betonu", "Rozbiórki obiektów", "Recykling gruzu"] },
            { title: "Budowa nawierzchni i utwardzenie terenu", bullets: ["Utwardzenia placów", "Budowa dróg lokalnych", "Zagęszczanie podłoża"] },
            { title: "Usługi sprzętem ciężkim", bullets: ["Koparki, walce, spycharki", "Operacje zdalne", "Transport na placu budowy"] },
            { title: "Transport i wywóz materiałów", bullets: ["Transport kruszyw", "Wywóz gruzu", "Logistyka materiałowa"] },
            { title: "Sprzedaż materiałów", bullets: ["Piasek, żwir, kruszywo", "Dostawa do klienta", "Doradztwo w doborze"] },
          ].map((item, idx) => (
            <article className="about__card" key={idx}>
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

export default About