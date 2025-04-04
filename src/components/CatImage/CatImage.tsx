import React from 'react';
import styles from './CatImage.module.css';

interface CatImageProps {
  imageUrl: string | null;
}

const CatImage: React.FC<CatImageProps> = ({ imageUrl }) => {
  return (
    <div className={styles.imageContainer}>
      {imageUrl ? <img src={imageUrl} alt="Cat" className={styles.image} /> : "загрузка..."}
    </div>
  );
};

export default CatImage;