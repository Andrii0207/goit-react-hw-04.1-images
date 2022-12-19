import React from 'react';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image: { name, webformatURL, largeImageURL } }) {
  return (
    <>
      <img src={webformatURL} alt={name} className={css.ImageGalleryItemImage} />
    </>
  );
}

export default ImageGalleryItem;
