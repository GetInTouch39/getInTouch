import axios from "axios";
interface Entity {
  _id?: string;
}
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
class APIClient<T extends Entity> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
  getById = (id: string | undefined) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
  auth = (entity: T) => {
    return axiosInstance.post<T>(this.endpoint, entity).then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
  update = (updatedData: T) => {
    return axiosInstance
      .put(this.endpoint + "/" + updatedData._id, updatedData)
      .then((res) => res.data);
  };
  delete = (id: string) => {
    return axiosInstance
      .delete(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
export default APIClient;
