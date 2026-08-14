import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-6">

      <div className="flex flex-col gap-4 overflow-y-auto max-h-[800px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setSelectedImage(image)}
            className={`w-16 h-24 object-cover cursor-pointer border transition-all duration-300 ${
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