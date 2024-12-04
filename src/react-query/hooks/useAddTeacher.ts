import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { CACHE_KEY_TEACHER } from "../data/constant";
import teacherService from "../services/teacherService";
import { Teacher } from "../Forms/TeacherForm";
interface AddTeacherContex {
  previousTeachers: Teacher[];
}

const useAddTeacher = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<Teacher, Error, Teacher, AddTeacherContex>({
    mutationFn: teacherService.post,
    onMutate: (newTeacher: Teacher) => {
      const previousTeachers =
        queryClient.getQueryData<Teacher[]>(CACHE_KEY_TEACHER) || [];

      queryClient.setQueryData<Teacher[]>(
        CACHE_KEY_TEACHER,
        (teachers = []) => [...teachers, newTeacher as Teacher]
      );
      return { previousTeachers };
    },
    onSuccess: (savedTeacher, newTeacher) => {
      queryClient.setQueryData<Teacher[]>(CACHE_KEY_TEACHER, (teachers) =>
        teachers
          ? teachers.map((teacher) =>
              teacher === newTeacher ? savedTeacher : teacher
            )
          : []
      );
      navigate(-1);
    },
    onError: (error, newTeacher, context) => {
      if (!context) return;
      queryClient.setQueryData<Teacher[]>(
        CACHE_KEY_TEACHER,
        context.previousTeachers
      );

      console.error("Failed to add teacher:", error.message);
    },
  });
};

export default useAddTeacher;
