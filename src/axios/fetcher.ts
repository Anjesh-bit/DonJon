import axiosInstance from "./axiosInstance";

export const fetcher = async (url: string) => {
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
};
