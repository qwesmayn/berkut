import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IImage } from "@/entities/image/model/image.interface";
import { Download, Heart, HeartOff } from "lucide-react";
import { ImageModal } from "@/shared/ui/ImageModal";
import { ImageWithBlur } from "@/widgets/ImageInfo";
import { useQuery } from "@tanstack/react-query";
import { getImageById } from "@/entities/image/api/getImageById";

export const ImageInfo: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["image", id],
    queryFn: () => getImageById(id as string),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<IImage[]>([]);

  const isFavorite = favorites.some(favorite => favorite.id === data?.id);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const hadnleAddToFavorite = () => {
    if (!data) return;
    const newFavorites = [...favorites, data];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const handleUnFavorite = () => {
    if (!data) return;
    const newFavorites = favorites.filter(favorite => favorite.id !== data.id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };
  

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${data?.urls.thumb})`,
      }}
      className="flex-1 bg-cover bg-no-repeat bg-center"
    >
      <section className="max-w-[1479px] mx-auto pt-10 space-y-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-[10px]">
            <div className="w-[56px] h-[56px] bg-gray-300 animate-pulse rounded-md" />
            {isLoading ? (
              <div className="flex flex-col gap-2">
                <div className="w-[150px] h-[20px] bg-gray-300 animate-pulse rounded-md" />
                <div className="w-[150px] h-[20px] bg-gray-300 animate-pulse rounded-md" />
              </div>
            ) : (
              <div className="text-[#F2F2F2]">
                <p className="text-2xl font-normal">{data?.user.name}</p>
                <p className="text-base font-normal">@{data?.user.username}</p>
              </div>
            )}
          </div>
          <div className="flex gap-5 items-center">
            {isFavorite ? (
              <button
                onClick={handleUnFavorite}
                className="bg-white rounded-lg p-3 cursor-pointer hover:bg-gray-400 transition-colors duration-300 will-change-transform"
              >
                <HeartOff size={24} strokeWidth={1} color="black" />
              </button>
            ) : (
              <button
                onClick={hadnleAddToFavorite}
                className="bg-white rounded-lg p-3 cursor-pointer hover:bg-gray-400 transition-colors duration-300 will-change-transform"
              >
                <Heart size={24} strokeWidth={1} color="black" />
              </button>
            )}
            <a
              href={data?.links.download}
              download={data?.user.name}
              target="_blank"
              className="flex items-center gap-4 bg-yellow-300 rounded-lg h-[49px] px-6 cursor-pointer hover:bg-yellow-500 transition-colors duration-300 will-change-transform"
            >
              <Download size={26} strokeWidth={1} color="black" />
              <p className="text-xl font-normal">Download</p>
            </a>
          </div>
        </div>
        {isLoading ? (
          <div className="w-[100%] h-[744px] bg-gray-300 animate-pulse rounded-md" />
        ) : (
          data && <ImageWithBlur image={data} onClick={openModal} />
        )}
      </section>

      {isModalOpen && data && (
        <ImageModal closeModal={closeModal} image={data} />
      )}
    </main>
  );
};
