import React from 'react';

function ImageGalleryItem({ image: { name, webformatURL, largeImageURL } }) {
  return (
    <>
      <img src={webformatURL} alt={name} />
    </>
  );
}

export default ImageGalleryItem;
