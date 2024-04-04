// Gallery.js

import React from 'react';
import Visit from '../Image/visit.png'
import pulwama from '../Image/pulwama.png'
import result from '../Image/result.png'
import result1 from '../Image/result1.png'
import sir from '../Image/sir.png'
import prayer from '../Image/prayer.png'

const Gallery = () => {
  const images = [
    { id: 1, src: Visit, alt: 'Image 1' },
    { id: 2, src: result, alt: 'Image 2' },
    { id: 3, src: pulwama, alt: 'Image 3' },
    { id: 1, src: result1, alt: 'Image 1' },
    { id: 2, src: sir, alt: 'Image 2' },
    { id: 3, src: prayer, alt: 'Image 3' },
    // Add more images as needed
  ];

  return (
    <div className="grid grid-cols-1 h-full pt-28 px-5 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
      {images.map(image => (
        <div key={image.id} className="overflow-hidden m-1 rounded-lg shadow-md">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
