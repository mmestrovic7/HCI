import React from 'react';
import Image from 'next/image'; 
import "../../about-hs/composition.css";

interface AlbumProps {
  title: string;
  playlistLink: string;
  imageSrc: string;
  imageAlt: string;
  year: string;
}

const Album: React.FC<AlbumProps> = ({ title, playlistLink, imageSrc, imageAlt, year }) => {
  return (
    <div className="basic-info">
      <h1 className="subTitle">{title}</h1>
      <div className="photo">
        <a href={playlistLink} target="_blank" rel="noopener noreferrer">
          <Image src={imageSrc} alt={imageAlt} width={200} height={200} priority />
        </a>
      </div>
      <p className="year">{year}</p>
    </div>
  );
};

export default Album;
