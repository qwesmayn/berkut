import { getImages } from "@/entities/image/api/getImages";
import { Search } from "lucide-react";
import type { FC } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ImageCard } from "@/entities/image/ui/ImageCard";
import { Skeleton } from "@/shared/ui/Skeleton";
import { debounce } from "@/shared/lib/debounce";

export const HomePage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  
  const debouncedSetSearchQuery = useState(() => 
    debounce((value: string) => {
      setSearchQuery(value);
    }, 1000)
  )[0];

  const {
    data: images,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["images", searchQuery],
    queryFn: () => getImages(9, "landscape", searchQuery),
    refetchOnWindowFocus: false,
    refetchInterval: 0,
    staleTime: 24 * 60 * 1000,
  });

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputValue(value);
    debouncedSetSearchQuery(value);
  };

  return (
    <main className="space-y-[114px] pb-[114px]">
      <section className="text-white">
        <div className="flex items-center bg-[url('@shared/assets/background/background.png')] bg-cover bg-center h-[268px]">
          <div className="relative max-w-[866px] w-full mx-auto flex items-center justify-center lg:px-0 px-4">
            <input
              type="text"
              placeholder="Поиск"
              value={inputValue}
              onChange={handleSearch}
              className="text-2xl w-full h-[50px] sm:h-[70px] bg-white py-5 px-8 text-black placeholder:text-black font-light ring-0 outline-none pr-[70px]"
            />
            <Search
              size={24}
              strokeWidth={1}
              className="absolute right-[34px] top-[50%] translate-y-[-50%] cursor-pointer"
              color="black"
            />
          </div>
        </div>
      </section>

      {isError && (
        <div className="max-w-[1479px] mx-auto text-center p-4 bg-red-50 text-red-600 rounded-md">
          Не удалось найти или загрузить изображения
        </div>
      )}

      <section className="flex flex-wrap justify-center sm:gap-[30px] gap-[20px] max-w-[1479px] mx-auto sm:px-0 px-3">
        {isLoading
          ? Array(9)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="w-[473px] h-[440px]" />
              ))
          : images?.map((image) => <ImageCard key={image.id} image={image} />)}
      </section>
    </main>
  );
};
