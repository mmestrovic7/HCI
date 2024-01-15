// CustomButton.tsx
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  text: string;
  href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, href }) => {
  return (
    <button type="button" className={styles.customButton}>
      <Link href={href}>{text}</Link>
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CustomButton;
