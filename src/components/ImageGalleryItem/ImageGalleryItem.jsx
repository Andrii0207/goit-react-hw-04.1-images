import React from 'react';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image: { name, webformatURL, largeImageURL }, onSelect }) {
  return (
    <>
      <img
        src={webformatURL}
        alt={name}
        className={css.ImageGalleryItemImage}
        onClick={() => {
          onSelect(largeImageURL);
        }}
      />
    </>
  );
}

export default ImageGalleryItem;
