import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image: { tags, webformatURL, largeImageURL }, onSelect }) {
  return (
    <>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
        onClick={() => {
          onSelect(largeImageURL);
        }}
      />
    </>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;
