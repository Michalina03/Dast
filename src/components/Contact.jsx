import React from 'react'
import logo from "../img/logo2.jpg"

function Contact() {
  return (
        <section className="contact">
      {/* Mapa Google */}
      <div className="contact__map">
        <iframe
          title="Mapa Google - APA Group"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.758003899498!2d20.911516515797587!3d52.20560797975751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb624c8e5f3b%3A0x182089c38cf5da4d!2sul.%20Potrzebna%2011%2C%2002-448%20Warszawa!5e0!3m2!1spl!2spl!4v1697399999999!5m2!1spl!2spl"
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