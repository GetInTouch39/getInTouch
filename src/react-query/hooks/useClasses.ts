import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CLASS } from "../data/constant";
import ClassService, { Levels } from "../services/classService";

const useClass = () => {
  return useQuery<Levels[], Error>({
    queryKey: CACHE_KEY_CLASS,
    queryFn: ClassService.getAll,
    staleTime: 10 * 1000,
  });
};
export default useClass;
