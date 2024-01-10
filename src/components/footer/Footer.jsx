import React from "react";
import "./footer.css";
import big from "../../assets/big.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer__content">
        <div className="section__part">
      <div className="footer__logo">
        <img src={big} alt="" /> 
        <p>TRYDO</p>
      </div>
      <div className="footer__social">
      <button><a href=""><FaFacebook /></a></button>
      <button><a href=""><FaTwitter /></a></button>
      <button><a href=""><FaLinkedin /></a></button>
      <button><a href=""><FaInstagram /></a></button>
      </div>
      <div className="copyright">
      <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
      </div>
      </div>
    </section>
  );
};

export default Footer;
