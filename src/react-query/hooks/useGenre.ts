import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import { CACHE_KEY_GENRE } from "../data/constant";
import genre from "../data/genre";

const useGenre = () => {
  return useQuery<Genre[], Error>({
    queryKey: CACHE_KEY_GENRE,
    queryFn: genreService.getAll,
    staleTime: 1 * 1000,
    initialData: genre,
  });
};
export default useGenre;
