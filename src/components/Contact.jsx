import React from 'react'

function Contact() {
  return (
    <>
    {/* 1. Hero z tłem */}
      <section className="contact-hero section">
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__text">
            We would love to hear from you! Reach out or drop by.
          </p>
          <button className="contact-hero__btn">Contact Us</button>
        </div>
      </section>
      {/* 2. Kafelki kontaktowe */}
      <section className="contact-cards section">
        <div className="contact-cards__item">
          <h3>Email</h3>
          <p>biuro@dastogrody.pl</p>
        </div>
        <div className="contact-cards__item">
          <h3>Telefon</h3>
          <p>+48 505 357 689</p>
        </div>
        <div className="contact-cards__item">
          <h3>Adres</h3>
          <p>Borowe-Gryki 11, 06-316</p>
        </div>
      </section>
      

      {/* 3. Formularz kontaktowy */}
      <section className="contact-form section">
        <h2 className="contact-form__title">Send us a message</h2>
        <form className="contact-form__form">
          <input type="text" placeholder="Your Name" className="contact-form__input" />
          <input type="email" placeholder="Your Email" className="contact-form__input" />
          <textarea placeholder="Your Message" className="contact-form__textarea"></textarea>
          <button className="contact-form__btn">Send Message</button>
        </form>
      </section>

      {/* 4. CTA / Dodatkowe info */}
      <section className="contact-cta section">
        <h2 className="contact-cta__title">Follow Us for Updates</h2>
        <div className="contact-cta__buttons">
          <button>Instagram</button>
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
      </section>
    
     
      {/* 5. Mapa */}
      <section className="contact-map section">
        <div className="contact-map__map">
          <iframe
            title="Coffee Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.8489008935476!2d20.78197889954835!3d53.13085791569785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471dda78507566a7%3A0xa9c3b3aa73d836e5!2sBorowe-Gryki%2011%2C%2006-316%20Borowe-Chrzczany!5e0!3m2!1spl!2spl!4v1760104532479!5m2!1spl!2spl" 
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact