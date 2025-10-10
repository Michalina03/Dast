import React from 'react'

function About() {
  return   (
    <>
      {/* 1. Hero */}
      <section className="about-hero section">
        <div className="about-hero__overlay"></div>
        <div className="about-hero__content">
          <h1 className="about-hero__title">Who We Are</h1>
          <p className="about-hero__text">
            Crafting the perfect brew with passion, dedication, and a sprinkle of creativity.
          </p>
          <button className="about-hero__btn">Explore More</button>
        </div>
      </section>

      {/* 2. Timeline / Historia */}
      <section className="about-timeline section">
        <h2 className="about-timeline__title">Our Journey</h2>
        <div className="about-timeline__line">
          <div className="about-timeline__item">
            <span className="dot"></span>
            <p>2015 – Started in a small garage with a big dream.</p>
          </div>
          <div className="about-timeline__item">
            <span className="dot"></span>
            <p>2018 – Opened our first café in Brewtown.</p>
          </div>
          <div className="about-timeline__item">
            <span className="dot"></span>
            <p>2022 – Serving coffee lovers worldwide.</p>
          </div>
        </div>
      </section>

      {/* 3. Team */}
      <section className="about-team section">
        <h2 className="about-team__title">Meet the Crew</h2>
        <div className="about-team__cards">
          <div className="about-team__card">Alice<br /><span>Barista</span></div>
          <div className="about-team__card">Bob<br /><span>Roaster</span></div>
          <div className="about-team__card">Carol<br /><span>Manager</span></div>
        </div>
      </section>

      {/* 4. Values */}
      <section className="about-values section">
        <div className="about-values__wave"></div>
        <h2 className="about-values__title">Our Core Values</h2>
        <div className="about-values__items">
          <div className="about-values__item">☕ Quality</div>
          <div className="about-values__item">🌍 Sustainability</div>
          <div className="about-values__item">🤝 Community</div>
        </div>
      </section>

       
      {/* 5. CTA z mapą */}
      <section className="about-cta section">
        <div className="about-cta__overlay"></div>
        <div className="about-cta__content">
          <h2 className="about-cta__title">Visit Us</h2>
        </div>
        <div className="about-cta__map">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.8489008935476!2d20.78197889954835!3d53.13085791569785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471dda78507566a7%3A0xa9c3b3aa73d836e5!2sBorowe-Gryki%2011%2C%2006-316%20Borowe-Chrzczany!5e0!3m2!1spl!2spl!4v1760104532479!5m2!1spl!2spl" 
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default About