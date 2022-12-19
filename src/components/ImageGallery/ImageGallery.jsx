import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

function ImageGallery({ images }) {
  return (
    <ul class={css.ImageGallery}>
      {images.map(image => {
        return (
          <li key={image.id} class={css.ImageGalleryItem}>
            <ImageGalleryItem image={image} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
