"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  const [rerenderTrigger, setRerenderTrigger] = useState<boolean>(false);

  useEffect(() => {

  }, [rerenderTrigger]);

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
              <FontAwesomeIcon icon={faPhone} />
              +385 123 0000
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              design@mail.com
            </li>
            <div className="socialmedia-container">
              <a
                href="https://www.instagram.com/harrystyles/"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/harrystyles/"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com/Harry_Styles"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
