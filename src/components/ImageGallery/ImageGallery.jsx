import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

function ImageGallery({ images, onSelect }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <li key={image.id} className={css.ImageGalleryItem}>
          <ImageGalleryItem image={image} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
