import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:gap-6">

      <div className="flex gap-3 overflow-x-auto sm:flex-col sm:gap-4 sm:overflow-y-auto sm:max-h-[800px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setSelectedImage(image)}
            className={`w-14 h-20 sm:w-16 sm:h-24 flex-shrink-0 object-cover cursor-pointer border transition-all duration-300 ${
              selectedImage === image
                ? "border-black"
                : "border-gray-200 hover:border-gray-500"
            }`}
          />
        ))}
      </div>

   
      <div className="flex-1">
        <img
          src={selectedImage}
          alt=""
          className="object-cover w-full"
        />
      </div>

    </div>
  );
};

export default ProductGallery;