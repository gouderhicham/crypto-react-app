import React from "react";
import { useSelector } from "react-redux";
function Footer() {
  const loading = useSelector((data) => data.cryptos.cryptos_loading);
  if (loading) return; 
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">The company</h1>

        <h2>Contact</h2>

        <address>
          5534 Somewhere In. The World 22193-10212
          <a className="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Online</a>
            </li>

            <li>
              <a href="#">Print</a>
            </li>

            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Online</a>
            </li>

            <li>
              <a href="#">Print</a>
            </li>

            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2019 The company. All rights reserved.</p>

        <div className="legal__links">
          <span>I stole this footer from someone.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
