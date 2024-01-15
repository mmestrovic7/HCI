import Image from "next/image";
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="sitemap-container">
          <h1 className="sitemap-title">Sitemap</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/fans">Fans</a>
            </li>
            <li>
              <a href="/lot">Love On Tour</a>
            </li>
            <li>
              <a href="/about-hs">About HS</a>
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <ul>
            <li>Ruđera Boškovića 32</li>
            <li>21000, Split, Croatia</li>
            <li>
              <img
                src="phone_vector.svg"
                alt="imagePhone"
                width={15}
                height={15}
              />
              +385 123 0000
            </li>
            <li>
              <img
                src="mail_vector.svg"
                alt="imageMail"
                width={15}
                height={15}
              />
              design@mail.com
            </li>
            <li className="socialmedia-container">
              <a href="https://www.instagram.com/harrystyles/" target="_blank">
                <img
                  src="insta_vector.svg"
                  alt="imageInsta"
                  width={15}
                  height={15}
                />
              </a>
              <a href="https://www.facebook.com/harrystyles/" target="_blank">
                <img
                  src="facebook_vector.svg"
                  alt="imageFacebook"
                  width={8}
                  height={8}
                />
              </a>
              <a href="https://twitter.com/Harry_Styles" target="_blank">
                <img
                  src="twitter_vector.svg"
                  alt="imageTwitter"
                  width={17}
                  height={17}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright-text">
        Copyright @ 2023 FESB. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
