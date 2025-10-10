import React from "react";
import About from "./About";
import Contact from "./Contact";
import Img from "../img/foto.jpg";

export default function Home() {
  return (
    <>
      {/* 1. Split Hero */}
      <section className="split-hero section">
  <div className="split-hero__content">
    <h1 className="split-hero__title">Savor the Perfect Brew!</h1>
    <p className="split-hero__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
    </p>
    <div className="split-hero__buttons">
      <button className="split-hero__btn">Order Now</button>
      <button className="split-hero__btn split-hero__btn--alt">Learn More</button>
    </div>
  </div>
  <div className="split-hero__image">
    <img src={Img} alt="Coffee" />
  </div>
</section>

      {/* 2. Background Hero */}
      <section className="bg-hero section">
        <div className="bg-hero__overlay"></div>
        <div className="bg-hero__content">
          <h1 className="bg-hero__title">Discover Unique Flavors</h1>
          <p className="bg-hero__text">
            Explore our carefully crafted menu designed for coffee lovers.
          </p>
          <button className="bg-hero__btn">Explore Menu</button>
        </div>
      </section>

      {/* 3. Grid Features */}
      <section className="grid-features section">
        <div className="grid-features__header">
          <h2 className="grid-features__title">Why Choose Us?</h2>
          <p className="grid-features__subtitle">
            We bring quality, passion and unique taste in every cup.
          </p>
        </div>
        <div className="grid-features__items">
          <div className="grid-features__item">
            <h3 className="grid-features__item-title">☕ Freshly Brewed</h3>
            <p>Every cup is made with carefully selected beans.</p>
          </div>
          <div className="grid-features__item">
            <h3 className="grid-features__item-title">🌿 Organic</h3>
            <p>Only natural and sustainable ingredients.</p>
          </div>
          <div className="grid-features__item">
            <h3 className="grid-features__item-title">⚡ Fast Service</h3>
            <p>No waiting – your order is ready in minutes.</p>
          </div>
        </div>
      </section>

      {/* 4. Pricing */}
      <section className="pricing section">
        <h2 className="pricing__title">Our Plans</h2>
        <div className="pricing__cards">
          <div className="pricing__card">
            <h3 className="pricing__plan">Basic</h3>
            <p className="pricing__price">$5</p>
            <ul>
              <li>1 Coffee / Day</li>
              <li>Free WiFi</li>
            </ul>
            <button className="pricing__btn">Choose</button>
          </div>
          <div className="pricing__card pricing__card--highlight">
            <h3 className="pricing__plan">Pro</h3>
            <p className="pricing__price">$12</p>
            <ul>
              <li>3 Coffees / Day</li>
              <li>Free WiFi</li>
              <li>Exclusive Offers</li>
            </ul>
            <button className="pricing__btn">Choose</button>
          </div>
          <div className="pricing__card">
            <h3 className="pricing__plan">Unlimited</h3>
            <p className="pricing__price">$20</p>
            <ul>
              <li>Unlimited Coffee</li>
              <li>Free WiFi</li>
              <li>VIP Lounge Access</li>
            </ul>
            <button className="pricing__btn">Choose</button>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="testimonials section">
        <h2 className="testimonials__title">What Our Customers Say</h2>
        <div className="testimonials__list">
          <div className="testimonials__item">
            <p>"Best coffee I've ever had!"</p>
            <span>- Anna</span>
          </div>
          <div className="testimonials__item">
            <p>"Lovely atmosphere and great service."</p>
            <span>- John</span>
          </div>
          <div className="testimonials__item">
            <p>"I come here every morning – highly recommend."</p>
            <span>- Maria</span>
          </div>
        </div>
      </section>

      {/* 6. Newsletter */}
      <section className="newsletter section">
        <h2 className="newsletter__title">Stay Updated</h2>
        <p className="newsletter__text">
          Subscribe to our newsletter and get the latest offers.
        </p>
        <form className="newsletter__form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter__input"
          />
          <button type="submit" className="newsletter__btn">
            Subscribe
          </button>
        </form>
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
