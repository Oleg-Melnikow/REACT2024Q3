import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const searchAPI = {
  async getItems(): Promise<AxiosResponse> {
    return instance.get(`/people`);
  },
  async searchItems(search: string): Promise<AxiosResponse> {
    return instance.get(`/people${search}`);
  },
};
