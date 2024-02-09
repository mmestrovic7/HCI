"use client";
import React, { useState, useEffect } from "react";
import "./FullscreenGallery.css";
import { GalleryEntry } from "@/app/content";
import {
  faAngleRight,
  faAngleLeft,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../PhotoFrame/PhotoFrame.module.css";

interface FullscreenGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  galleryEntries: GalleryEntry[];
  currentEntry: {
    location: string;
    date: string;
    imageSrc: string;
  };
}

const FullscreenGallery: React.FC<FullscreenGalleryProps> = ({
  isOpen,
  onClose,
  galleryEntries,
  currentEntry,
}) => {
  const [prevSlide, setPrevSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);

  useEffect(() => {
    const currentIndex = galleryEntries.findIndex(
      (entry) => entry.fields.photo.fields.file.url === currentEntry.imageSrc
    );

    setCurrentSlide(currentIndex);
    setPrevSlide((currentIndex - 1 + galleryEntries.length) % galleryEntries.length);
    setNextSlide((currentIndex + 1) % galleryEntries.length);
  }, [isOpen, currentEntry, galleryEntries]);

  const goToNextSlide = () => {
    setCurrentSlide(nextSlide);
    setPrevSlide(currentSlide);
    setNextSlide((nextSlide + 1) % galleryEntries.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prevSlide);
    setPrevSlide((prevSlide - 1 + galleryEntries.length) % galleryEntries.length);
    setNextSlide(currentSlide);
  };

  return (
    <div className={`overlayGallery ${isOpen ? "open" : ""}`}>
      <button className="galleryArrowButton" onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} className="galleryArrow" />
      </button>
      <div className="overlayItems">
        <button onClick={onClose} className="button-close">
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className="contentImg">
        <div className="photoFull">
          <img
            src={galleryEntries[currentSlide].fields.photo.fields.file.url}
            alt={galleryEntries[currentSlide].fields.location}
          />
          </div>
          <p>
            {galleryEntries[currentSlide].fields.location}, {galleryEntries[currentSlide].fields.date}
          </p>
        </div>
      </div>
      <button className="galleryArrowButton" onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faAngleRight} className="galleryArrow" />
      </button>
    </div>
  );
};

export default FullscreenGallery;
