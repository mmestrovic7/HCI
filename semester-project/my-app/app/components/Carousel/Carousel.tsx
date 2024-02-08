"use client";
import React, { useState } from "react";
import { GalleryEntry } from "@/app/content";
import CarouselItem from "@/app/components/CarouselItem/CarouselItem"; // Import the CarouselItem component
import "./Carousel.css";
import"@/app/globals.css";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CarouselProps {
  galleryEntries: GalleryEntry[];
}

const Carousel: React.FC<CarouselProps> = ({ galleryEntries }) => {
  const [prevSlide, setPrevSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [nextSlide, setNextSlide] = useState(2);
  const goToNextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide(nextSlide);
    if (nextSlide == galleryEntries.length - 1) {
      setNextSlide(0);
    } else {
      setNextSlide(nextSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    setNextSlide(currentSlide);
    setCurrentSlide(prevSlide);
    if (prevSlide == 0) {
      setPrevSlide(galleryEntries.length - 1);
    } else {
      setPrevSlide(prevSlide - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevSlide} className="slideButton left">
        <FontAwesomeIcon icon={faAngleLeft} className="arrow"/>
      </button>

      {/* Render three CarouselItem components */}

      <div className="carousel-items">
        <div className="hideOnPhone carousel-items" >
          <CarouselItem
            key={galleryEntries[prevSlide].sys.id}
            entry={galleryEntries[prevSlide]}
            isActive={true}
          />
          <CarouselItem
            key={galleryEntries[currentSlide].sys.id}
            entry={galleryEntries[currentSlide]}
            isActive={true}
          />
        </div>
        <CarouselItem
          key={galleryEntries[nextSlide].sys.id}
          entry={galleryEntries[nextSlide]}
          isActive={true}
        />
      </div>

      <button className="slideButton right" onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faAngleRight} className="arrow"/>
      </button>
    </div>
  );
};

export default Carousel;
