import APIClient from "./apiClient";

export interface Genre {
  _id: string;
  label: string;
  __v: number;
}

export default new APIClient<Genre>("/genres");
