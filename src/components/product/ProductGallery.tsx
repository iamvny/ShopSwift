
import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="product-gallery">
      {/* Main image */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <img 
          src={images[currentImage]} 
          alt={`${name} - Image ${currentImage + 1}`}
          className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`block w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 ${
                index === currentImage ? 'border-shop-primary' : 'border-transparent'
              }`}
            >
              <img 
                src={image} 
                alt={`${name} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
