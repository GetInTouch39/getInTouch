import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
  auth = (values: T) => {
    return axiosInstance.post<T>(this.endpoint, values).then((res) => res.data);
  };
}
export default APIClient;