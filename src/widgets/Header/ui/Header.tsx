import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { pageConfig } from "@shared/config/page.config";
import { Heart, Search } from "lucide-react";

export const Header: FC = () => {
  const {pathname} = useLocation()

  return (
    <header className="bg-black text-white flex items-center min-h-[132px]">
      <div className="flex justify-between items-center w-full max-w-[1377px] mx-auto px-4">
        <div>
          <Link to={pageConfig.home}>
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-5 sm:gap-9">
          {pathname !== pageConfig.home && (
            <Link to={pageConfig.home} className="flex items-center gap-[10px] text-lg font-normal">
              <Search size={24} strokeWidth={1} />
              <p className="hidden sm:block">Поиск</p>
            </Link>
          )}
          <Link to={pageConfig.favorites} className="flex items-center gap-[10px] text-lg font-normal">
            <Heart size={24} strokeWidth={1} />
            <p className="hidden sm:block">Избранное</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
