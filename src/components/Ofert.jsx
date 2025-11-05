import React from "react";
import foto from "../img/foto.jpg";
import machine from "../img/machine2.jpg";
import car from "../img/car.jpg";
import garden from "../img/garden2.jpg";

function Ofert() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="services">
        <div className="services__intro">
          <span className="services__subtitle">Oferujemy</span>
          <h2 className="services__title"></h2>
        </div>

        <div className="services__cards">
          <div className="services__card">
            <img src={garden} alt="Kompleksowa realizacja ogrodów" className="services__image" />
            <h3 className="services__card-title">Kompleksową realizacją ogrodów</h3>
            <p className="services__card-text">
              Projektowanie ogrodów i pielęgnacją terenów zielonych przy firmach.
            </p>
            <button
              className="services__button"
              onClick={() => scrollToSection("gardens")}
            >
              Dowiedz się więcej
            </button>
          </div>

          <div className="services__card">
            <img src={car} alt="Warsztat samochodowy" className="services__image" />
            <h3 className="services__card-title">Warsztat samochodowy</h3>
            <p className="services__card-text">
              Serwis i naprawa pojazdów, diagnostyka komputerowa, wymiana opon oraz obsługa klimatyzacji.
            </p>
            <button
              className="services__button"
              onClick={() => scrollToSection("workshop")}
            >
              Dowiedz się więcej
            </button>
          </div>

          <div className="services__card">
            <img src={machine} alt="Wynajem sprzętu" className="services__image" />
            <h3 className="services__card-title">Wynajem sprzętu</h3>
            <p className="services__card-text">
              Oferujemy wynajem sprzętu budowlanego, ogrodowego i transportowego na krótkie oraz długie terminy.
            </p>
            <button
              className="services__button"
              onClick={() => scrollToSection("rental")}
            >
              Dowiedz się więcej
            </button>
          </div>
        </div>

        {/* --- SEKCJA OGRODY --- */}
        <div className="services__gift" id="gardens">
          <div className="services__gift-content">
            <h3 className="services__gift-title">Kompleksowa realizacja ogrodów</h3>
            <div className="services__gift-text">
              <h4 className="services__gift-text--title">🌿 Realizacja ogrodów z pasją</h4>
              <p className="services__gift-text--paragraph">
                Specjalizujemy się w kompleksowej realizacji ogrodów – od projektu, przez przygotowanie terenu,
                po pełne wykonanie zieleni. Każdy ogród tworzymy z myślą o harmonii, funkcjonalności i estetyce
                dopasowanej do potrzeb właściciela.
              </p>
              <h4 className="services__gift-text--title">🌸 Indywidualne podejście do każdego projektu</h4>
              <p className="services__gift-text--paragraph">
                Zajmujemy się zarówno małymi, przydomowymi przestrzeniami, jak i dużymi ogrodami
                rezydencjonalnymi. Nasz zespół łączy wiedzę ogrodniczą z nowoczesnym designem, dzięki czemu
                każdy projekt wyróżnia się niepowtarzalnym charakterem.
              </p>
              <h4 className="services__gift-text--title">🌳 Działamy na terenie Mazowsza</h4>
              <p className="services__gift-text--paragraph">
                Realizujemy zlecenia na terenie całego województwa mazowieckiego, w tym w Warszawie i okolicach.
                Gwarantujemy terminowość, solidność oraz dbałość o każdy detal – od pierwszej koncepcji aż po
                gotowy ogród gotowy do relaksu.
              </p>
            </div>
          </div>

          <div className="services__gift-image">
            <img src={foto} alt="Realizacja ogrodów" />
          </div>
        </div>

        {/* --- SEKCJA WARSZTAT --- */}
        <div className="services__gift" id="workshop">
          <div className="services__gift-content">
            <h3 className="services__gift-title">Profesjonalny serwis samochodowy</h3>
            <div className="services__gift-text">
              <h4 className="services__gift-text--title">🔧 Kompleksowa obsługa pojazdów</h4>
              <p className="services__gift-text--paragraph">
                Oferujemy pełen zakres usług serwisowych – od przeglądów okresowych, przez naprawy mechaniczne,
                aż po diagnostykę komputerową. Nasz warsztat wyposażony jest w nowoczesny sprzęt, który pozwala
                szybko i skutecznie wykrywać oraz usuwać usterki.
              </p>
              <h4 className="services__gift-text--title">🧰 Doświadczenie i fachowa kadra</h4>
              <p className="services__gift-text--paragraph">
                Zespół naszych mechaników to specjaliści z wieloletnim doświadczeniem, którzy do każdego pojazdu
                podchodzą indywidualnie. Dbamy o jakość usług i zadowolenie klientów, oferując rzetelne doradztwo
                oraz transparentne warunki współpracy.
              </p>
              <h4 className="services__gift-text--title">🚗 Szybko, solidnie i w dobrej cenie</h4>
              <p className="services__gift-text--paragraph">
                Naprawiamy samochody osobowe i dostawcze wszystkich marek. Gwarantujemy terminową realizację
                usług, atrakcyjne ceny oraz możliwość umówienia wizyty online. Z nami Twój samochód zawsze będzie
                w najlepszych rękach.
              </p>
            </div>
          </div>

          <div className="services__gift-image">
            <img src={foto} alt="Warsztat samochodowy" />
          </div>
        </div>

        {/* --- SEKCJA WYNAJEM --- */}
        <div className="services__gift" id="rental">
          <div className="services__gift-content">
            <h3 className="services__gift-title">Wynajem sprzętu i pojazdów</h3>
            <div className="services__gift-text">
              <h4 className="services__gift-text--title">🚜 Wynajem sprzętu budowlanego i ogrodowego</h4>
              <p className="services__gift-text--paragraph">
                Oferujemy szeroki wybór sprzętu budowlanego, ogrodowego i transportowego dostępnego od ręki.
                Nasz park maszynowy obejmuje minikoparki, zagęszczarki, kosiarki oraz wiele innych urządzeń
                niezbędnych przy pracach ziemnych i porządkowych.
              </p>
              <h4 className="services__gift-text--title">🚚 Wynajem samochodów i przyczep</h4>
              <p className="services__gift-text--paragraph">
                Wypożyczamy samochody dostawcze, busy oraz przyczepy towarowe w konkurencyjnych cenach.
                Wszystkie pojazdy są regularnie serwisowane, czyste i w pełni sprawne technicznie, gotowe
                do pracy lub podróży w każdych warunkach.
              </p>
              <h4 className="services__gift-text--title">🕒 Elastyczne warunki i szybka obsługa</h4>
              <p className="services__gift-text--paragraph">
                Umożliwiamy wynajem krótko- i długoterminowy, z prostymi zasadami i minimum formalności.
                Z nami zaoszczędzisz czas i pieniądze – zapewniamy przejrzyste zasady, korzystne stawki
                i profesjonalne doradztwo przy wyborze odpowiedniego sprzętu lub pojazdu.
              </p>
            </div>
          </div>

          <div className="services__gift-image">
            <img src={foto} alt="Wynajem sprzętu i pojazdów" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Ofert;
