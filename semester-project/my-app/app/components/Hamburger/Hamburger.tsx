"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import "./Hamburger.css"; // Import your CSS module

interface HamburgerProps {
  pages: { [key: string]: string };
}

const Hamburger: FC<HamburgerProps> = ({ pages }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div
      className={`hamburger-container ${isHamburgerOpen ? "open" : ""}`}
      onClick={handleHamburgerClick}
    >
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      {isHamburgerOpen && (
        <div className="additional-content">
          {Object.entries(pages).map(([name, path]) => (
            <div key={name} className="hamburger-item">
              <a href={path}>{name.toUpperCase()}</a>
            </div>
          ))}
          <div className="hamburger-item">
            <a href="/about-hs">ABOUT HARRY</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
