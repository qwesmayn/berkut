import type { FC } from "react";
import { useState } from "react";
import { Maximize } from "lucide-react";
import type { IImage } from "@/entities/image/model/image.interface";

interface ImageWithBlurProps {
  image: IImage;
  onClick: () => void;
}

export const ImageWithBlur: FC<ImageWithBlurProps> = ({ image, onClick }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="h-[744px] w-max mx-auto relative">
      <div className="relative h-full w-full">
        <img
          src={image.urls.small}
          alt={image.user.name}
          className={`absolute inset-0 h-full w-full object-contain rounded-md blur-xl scale-105 transition-opacity duration-300 ${
            isImageLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src={image.urls.regular}
          alt={image.user.name}
          className={`relative h-full w-full object-contain rounded-md transition-opacity duration-500 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
        />
      </div>
      {isImageLoaded && (
        <Maximize
          size={32}
          strokeWidth={1}
          color="white"
          onClick={onClick}
          className="absolute bottom-6 right-6 cursor-pointer"
        />
      )}
    </div>
  );
}; 