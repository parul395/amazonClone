import React from "react";
import "./Header.css";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Get To Know Us</h2>
            <Link to="/sign-up">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Press Releases</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Amazon Cares</Link>
          </div>
          <div class="footer-link-items">
            <h2>Let Us Help You</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Make Money With Us</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Connect with Us</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img
                className="header__logo"
                src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png "
                alt="xxx"
              />
            </Link>
          </div>
          <small class="website-rights">AMAZON © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
