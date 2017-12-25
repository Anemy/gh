import React from 'react';
import ImageGallery from 'react-image-gallery';

import './ImageGallery.css'

const images = [{
  original: 'images/australia-oct-1985.jpg',
  description: 'Australia 1985'
}, {
  original: 'a-g.jpg',
  description: 'Amy & Gareth whale watching on the Saint Lawrence River, Canada, 2016'
}, {
  original: 'images/4.jpg'
}, {
  original: 'images/fredonia.jpg',
  description: 'Gareth, Jon, Amy, & Rhys in Fredonia NY'
}, {
  original: 'images/howling-with-laughter.jpg'
}, {
  original: 'images/belkiss-gallery.jpg'
}/*, {
  original: 'images/pensive.jpg'
}*/, {
  original: 'images/lunch.jpg'
}, {
  original: 'images/black-and-white.jpg'
}, {
  original: 'images/lounging.jpg'
}, {
  original: 'images/with-baby.jpg'
}, {
  original: 'images/with-amy.jpg'
}, {
  original: 'images/picnic-with-kids.jpg'
}, {
  original: 'images/picnic-tray.jpg'
}, {
  original: 'images/amy-g-france-thiers-1998.jpg',
  description: 'Amy & Gareth, Thiers, 1998'
}, {
  original: 'images/big-dinner-javed-enjum.jpg'
}, {
  original: 'images/gareth-1987.jpg',
  description: '1987'
}, {
  original: 'images/parents.jpg'
}];

const Gallery = () => (
  <div className="gallery-container">
    <ImageGallery
      items={images}
      showThumbnails={false}
    />
  </div>
);

export default Gallery;