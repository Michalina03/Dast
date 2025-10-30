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
    <div className="contact__icon" aria-hidden="true">
      {/* Ikona lokalizacji */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
        />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    </div>
    <div>
      <p>Leszno 4E, 06-300 Przasnysz</p>
      <p>06-316 Borowe-Gryki</p>
    </div>
  </div>

  <div className="contact__col">
    <div className="contact__icon" aria-hidden="true">
      {/* Ikona kontaktu (telefon) */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5A.75.75 0 018 4.75v2.5a.75.75 0 01-.75.75H6.5c.637 3.513 3.737 6.613 7.25 7.25v-.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v2.5c0 .966-.784 1.75-1.75 1.75C8.268 18.5 3.5 13.732 3.5 7.75a.75.75 0 01.75-.75z"
        />
      </svg>
    </div>
    <div>
      <p> +48 505 357 689</p>
      <p>biuro@dastogrody.pl</p>
    </div>
  </div>
</div>

<div className="contact__details">
  <p>NIP: 7611551980</p>
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