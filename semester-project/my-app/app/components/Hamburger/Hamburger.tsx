"use client";

import React, { FC, useState, useCallback } from "react";
import "./Hamburger.css";

interface HamburgerProps {
  pages: { [key: string]: string };
  activeItem: string;
  handleItemClick: (name: string) => void;
}

const Hamburger: FC<HamburgerProps> = ({ pages, activeItem, handleItemClick }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = useCallback(() => {
    setIsHamburgerOpen(prevState => !prevState);
  }, []);

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
            <div
              key={name}
              className={`hamburger-item ${activeItem === name ? "active" : ""}`}
            >
              <a href={path} onClick={() => handleItemClick(name)}>
                <h2>{name.toUpperCase()}</h2>
              </a>
            </div>
          ))}
          <div
            className={`hamburger-item ${activeItem === "about-hs" ? "active" : ""}`}
          >
            <a href="/about-hs" onClick={() => handleItemClick("about-hs")}>
              <h2>ABOUT HARRY</h2>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
