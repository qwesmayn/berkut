import type { IImage } from "@/entities/image/model/image.interface";
import { ImageCard } from "@/entities/image/ui/ImageCard";
import type { FC } from "react";

export const Favorites: FC = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <main className="sm:pb-[167px] pb-[100px] sm:pt-[94px] pt-[50px]">
      <section className="sm:space-y-[101px] space-y-[50px]">
        <div>
          <h1 className="sm:text-7xl text-5xl font-bold text-center">Избранное</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px] max-w-[1479px] mx-auto sm:px-0 px-3">
          {favorites.map((favorite: IImage) => (
            <ImageCard key={favorite.id} image={favorite} />
          ))}
        </div>
      </section>
    </main>
  );
};
