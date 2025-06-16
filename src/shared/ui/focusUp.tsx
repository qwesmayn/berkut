import { ArrowUp } from "lucide-react";
import type { FC } from "react";

export const FocusUp: FC = () => {
  return (
    <a href="#top" className="fixed bottom-10 right-10 bg-gray-300 rounded-full p-3 cursor-pointer hover:bg-gray-400 transition-colors duration-300 ">
      <ArrowUp size={24} strokeWidth={1} color="black" />
    </a>
  );
};
