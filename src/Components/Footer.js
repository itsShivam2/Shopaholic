import React from "react";
import "./Footer.css";
import shopaholic from "../SVG Collection/shopaholic.png";
import fb from "../SVG Collection/Facebook.svg";
import instagram from "../SVG Collection/Instagram.svg";
import twitter from "../SVG Collection//Twitter.svg";

function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-widget">
          <div className="footer-widget-div">
            <div className="footer-logo-info">
              <div className="footer-logo">
                <img src={shopaholic} width="58" height="40" />
                <h2 className="footer-widget-heading">Shopaholic</h2>
              </div>
              <p>
                Pulvinar aenean dignissim porttitor sed risus urna, pretium quis
                non id.
              </p>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon instagram">
                <img src={instagram} height="20px" width="20px" />
              </a>
              <a href="#" className="social-icon facebook">
                <img src={fb} height="20px" width="20px" />
              </a>
              <a href="#" className="social-icon twitter">
                <img src={twitter} height="20px" width="20px" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-widget">
          <div className="footer-information footer-widget-div">
            <h2 className="footer-widget-heading">Information</h2>
            <ul>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">My story</a>
              </li>
              <li>
                <a href="#">Awards &amp; achievement</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-widget">
          <div className="footer-discover footer-widget-div">
            <h2 className="footer-widget-heading">Discover</h2>
            <ul>
              <li>
                <a href="#">Dresses</a>
              </li>
              <li>
                <a href="#">Bottoms</a>
              </li>
              <li>
                <a href="#">Footwear</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-widget">
          <div className="footer-locate footer-widget-div">
            <h2 className="footer-widget-heading">Locate Us</h2>
            <ul>
              <li>123 Karol Bagh, New Delhi, India</li>
              <li>+91 123-456-7890</li>
              <li>shopaholic@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-copyright">
        {/* <hr className="horizontal-line"></hr> */}
        <span>© 2023 Shopaholic. Developed by by Shivam Gupta</span>
      </div>
    </div>
  );
}

export default Footer;
