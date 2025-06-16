import type { IImage } from "@/entities/image/model/image.interface";
import { ImageCard } from "@/entities/image/ui/ImageCard";
import type { FC } from "react";

export const Favorites: FC = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <main className="pb-[167px] pt-[94px]">
      <section className="space-y-[101px]">
        <div>
          <h1 className="text-7xl font-bold text-center">Избранное</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px] max-w-[1479px] mx-auto">
          {favorites.map((favorite: IImage) => (
            <ImageCard key={favorite.id} image={favorite} />
          ))}
        </div>
      </section>
    </main>
  );
};
