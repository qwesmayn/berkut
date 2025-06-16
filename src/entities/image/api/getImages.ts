import { axiosBase } from "@/shared/config/axios/axiosBase";
import type { IImage } from "../model/image.interface";

export const getImages = async (
  count: number = 9,
  orientation: string = "landscape",
  query: string = ""
): Promise<IImage[]> => {
  const response = await axiosBase.get<IImage[]>(
    `/photos/random?count=${count}&orientation=${orientation}&query=${query}`
  );
  return response.data;
};
