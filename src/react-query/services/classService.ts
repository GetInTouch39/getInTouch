import APIClient from "./apiClient";

export interface Levels {
  _id: string;
  label: string;
}

export default new APIClient<Levels>("/levels");
