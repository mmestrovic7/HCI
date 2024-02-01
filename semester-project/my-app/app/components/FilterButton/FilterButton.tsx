"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FilterButton.css";

interface FilterButtonProps {
  color: string;
  number: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ color, number }) => {
  const [isInverted, setIsInverted] = useState(false);

  const handleClick = () => {
    setIsInverted(!isInverted);
  };

  const buttonClassName = `filter-button ${color ? color : ""} ${
    isInverted ? "inverted" : ""
  }`;
  
  return (
    <div className={buttonClassName} onClick={handleClick}>
      <button>
        <div className="line">
          <span>2</span>
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          <span>2</span>
          <span className="num">{number}</span>
        </div>
      </button>
    </div>
  );
};

export default FilterButton;