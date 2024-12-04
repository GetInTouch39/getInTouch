import { Teacher } from "../Forms/TeacherForm";
import APIClient from "./apiClient";

export default new APIClient<Teacher>("/teachers");
