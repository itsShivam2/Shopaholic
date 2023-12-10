import React from "react";
import "./Footer.css";
import shopaholic from "../SVG Collection/shopaholic.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="site-footer flex flex-wrap justify-center content-center gap-2 box-border p-1 border-solid border-[#e5e7eb] bg-[#26222f] text-white">
        <div className="footer-widget flex flex-wrap flex-col justify-center items-center m-4 p-4 text-center max-w-[250px] flex-1  ">
          <div className="footer-widget-div flex flex-col items-start text-[#d9d9d9]">
            <div className="footer-logo-info font-lg my-5 text-left">
              <div className="footer-logo flex flex-wrap content-center justify-start items-center gap-2">
                <img src={shopaholic} alt="Shopaholic" width="58" height="40" />
                <h2 className="footer-widget-heading text-xl font-[400] font-[Fahkwang] text-white">
                  Shopaholic
                </h2>
              </div>
              <p className="font-base text-left font-[Montserrat] m-0">
                Pulvinar aenean dignissim porttitor sed risus urna, pretium quis
                non id.
              </p>
            </div>
            <div className="social-icons flex items-center justify-center gap-6">
              <a href="#" className="social-icon instagram">
                <FaInstagram className="text-2xl"/>
              </a>
              <a href="#" className="social-icon facebook">
                <FaFacebook className="text-2xl"/>
              </a>
              <a href="#" className="social-icon twitter">
                <FaTwitter className="text-2xl"/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-widget flex flex-wrap flex-col justify-center items-center m-4 p-4 text-center max-w-[250px] flex-1">
          <div className="footer-information footer-widget-div flex flex-col items-start text-[#d9d9d9]">
            <h2 className="footer-widget-heading text-xl font-[400] font-[Fahkwang] text-white">
              Information
            </h2>
            <ul className="text-white text-left font-[Montserrat]">
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">My story</a>
              </li>
              <li>
                <a href="#">Awards</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-widget flex flex-wrap flex-col justify-center items-center m-4 p-4 text-center max-w-[250px] flex-1">
          <div className="footer-discover footer-widget-div flex flex-col items-start text-[#d9d9d9]">
            <h2 className="footer-widget-heading text-xl font-[400] font-[Fahkwang] text-white">
              Discover
            </h2>
            <ul className="text-white text-left font-[Montserrat]">
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

        <div className="footer-widget flex flex-wrap flex-col justify-center items-center m-4 p-4 text-center max-w-[250px] flex-1">
          <div className="footer-locate footer-widget-div flex flex-col items-start text-[#d9d9d9]">
            <h2 className="footer-widget-heading text-xl font-[400] font-[Fahkwang] text-white">
              Locate Us
            </h2>
            <ul className="text-white text-left font-[Montserrat]">
              <li>123 Karol Bagh, New Delhi, India</li>
              <li>+91 123-456-7890</li>
              <li>shopaholic@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-copyright flex justify-center items-center pb-4 text-white font-[Montserrat] bg-[#26222f]">
        {/* <hr className="horizontal-line"></hr> */}
        <span>© 2023 Shopaholic. Developed by by Shivam Gupta</span>
      </div>
    </div>
  );
}

export default Footer;
