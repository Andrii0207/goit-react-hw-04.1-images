import React from 'react';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul class="gallery">
      {images.map(image => {
        return <li key={image.id}>{/* <ImageGalleryItem /> */}</li>;
      })}
    </ul>
  );
}

export default ImageGallery;
