import type { IImage } from "@/entities/image/model/image.interface";
import { X } from "lucide-react";
import type { FC } from "react";

interface ImageModalProps {
  closeModal: () => void;
  image: IImage;
}

export const ImageModal: FC<ImageModalProps> = ({ closeModal, image }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
          onClick={closeModal}
        >
          <X size={24} strokeWidth={1.5} color="black" />
        </button>
        <img
          src={image?.urls.full}
          alt={image?.user.name}
          className="max-h-screen max-w-full object-contain"
        />
      </div>
    </div>
  );
};
