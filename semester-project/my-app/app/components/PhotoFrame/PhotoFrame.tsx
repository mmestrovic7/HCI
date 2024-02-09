// PhotoFrame.tsx
import React from 'react';
import styles from './PhotoFrame.module.css'; // Import your CSS module

interface PhotoFrameProps {

  location: string;
  date: string;
  imageSrc: string;

}

const PhotoFrame: React.FC<PhotoFrameProps> = ({
  location,
  date,
  imageSrc,

}) => {
  return (
    <div className={styles.photoFrame}>
      <p className={styles.photoText}>
        {location}, <br />
        {date}
      </p>
      <div className={styles.pfImg}>
      <img  src={imageSrc} />
      </div>
    </div>
  );
};

export default PhotoFrame;
