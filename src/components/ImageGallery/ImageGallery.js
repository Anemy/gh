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
}, {
  original: 'images/pensive.jpg'
}, {
  original: 'images/lunch.jpg'
}, {
  original: 'images/black-and-white.jpg'
}, {
  original: 'images/lounging.jpg'
}, {
  original: 'images/parents.jpg'
}];

// class Gallery extends Component {
//   render() {
//     return (
//       <ImageGallery items={images} />
//     );
//   }
// }

const Gallery = () => (
  <div className="gallery-container">
    <ImageGallery
      items={images}
      showThumbnails={false}
    />
  </div>
);

export default Gallery;