import { memo, type FC } from "react";
import type { IImage } from "../model/image.interface";
import { useNavigate } from "react-router-dom";
import { pageConfig } from "@/shared/config/page.config";

interface ImageCardProps {
  image: IImage;
}

export const ImageCard: FC<ImageCardProps> = memo(({ image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${pageConfig.image.replace(":id", image.id)}`);
  };

  return (
    <button
      onClick={handleClick}
      className="lg:w-[473px] lg:h-[440px] w-[334px] h-[311px] cursor-pointer hover:scale-103 transition-transform duration-300 will-change-transform"
    >
      <img
        src={image.urls.small}
        alt={image.description || ""}
        className="w-full h-full object-cover rounded-md"
      />
    </button>
  );
});
