import React from "react";
import "./Polaroid.css";
import styles from "@/app/components/PhotoFrame/PhotoFrame.module.css";

interface PolaroidProps {
  location: string;
  date: string;
  imageSrc: string;
}

const Polaroid: React.FC<PolaroidProps> = ({ location, date, imageSrc }) => {
  return (
    <div className="polaroid">
      <img src={imageSrc} height={293} width={293} />{" "}
      <p className={styles.photoText}>
        {location}, <br />
        {date}
      </p>
    </div>
  );
};

export default Polaroid;
