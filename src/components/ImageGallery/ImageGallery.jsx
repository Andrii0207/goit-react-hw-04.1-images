import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

function ImageGallery({ images, onSelect }) {
  return (
    <ul class={css.ImageGallery}>
      {images.map(image => {
        return (
          <li key={image.id} className={css.ImageGalleryItem}>
            <ImageGalleryItem image={image} onSelect={onSelect} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
