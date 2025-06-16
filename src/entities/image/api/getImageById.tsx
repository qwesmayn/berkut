import { axiosBase } from "@/shared/config/axios/axiosBase";

export const getImageById = async (id: string) => {
  const response = await axiosBase.get(`/photos/${id}`);
  return response.data;
};
