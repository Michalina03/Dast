import React from 'react'
import logo from "../img/logo2.jpg"

function Contact() {
  return (
        <section className="contact">
      {/* Mapa Google */}
      <div className="contact__map">
        <iframe
          title="Mapa Google - APA Group"
          src="https://www.google.com/maps?q=Leszno+4E,+06-300+Przasnysz&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Sekcja kontaktowa */}
      <div className="contact__content">
        <div className="contact__info">
          <h2 className="contact__title">Dane adresowe</h2>

          <div className="contact__row">
            <div className="contact__col">
              <div className="contact__icon">📍</div>
              <div>
                <p>APA Group Sp. z o.o.</p>
                <p>ul. Potrzebna 11</p>
                <p>02-448 Warszawa</p>
              </div>
            </div>

            <div className="contact__col">
              <div className="contact__icon">📞</div>
              <div>
                <p>504 455 883</p>
                <p>biuro@apa-group.pl</p>
              </div>
            </div>
          </div>

          <div className="contact__details">
            <p>NIP: 522-301-38-93</p>
            <p>KRS: 0000970529</p>
            <p>REGON: 147135921</p>
          </div>
        </div>

        <div className="contact__image">
          <img src={logo} alt="Siedziba firmy APA Group" />
        </div>
      </div>
    </section>
  )
}

export default Contact