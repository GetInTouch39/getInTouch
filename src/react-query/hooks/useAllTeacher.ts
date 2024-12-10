import { useQuery } from "@tanstack/react-query";
import teacherService, { Teacher } from "../services/teacherService";
import { CACHE_KEY_TEACHER } from "../data/constant";

const useAllTeacher = () => {
  return useQuery<Teacher[], Error>({
    queryKey: CACHE_KEY_TEACHER,
    queryFn: teacherService.getAll,
    staleTime: 1 * 1000,
  });
};

export default useAllTeacher;
