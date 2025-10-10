import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© 2025 Dast. Wszelkie prawa zastrzeżone.</p>
        <nav className="footer__nav">
          <ul className="footer__nav__list">
            <li className="footer__nav__list__item">
              <a href="/">Polityka Prywatności</a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/">Regulamin</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer