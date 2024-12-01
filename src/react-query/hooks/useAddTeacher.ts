import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useAddTeacher = () => {
  useMutation({
    mutationFn: () =>
      axios
        .post("http://localhost:5173/layout/teachers", teacher)
        .then((res) => res.data),
  });
};

export default useAddTeacher;
