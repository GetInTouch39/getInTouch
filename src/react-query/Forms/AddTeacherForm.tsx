import useAddTeacher from "../hooks/useAddTeacher";
import validationSchema, { initialValues } from "../data/teacher";
import TeacherFormRe from "./TeacherFormRe";
import { Teacher } from "../services/teacherService";

const TeacherForm = () => {
  const addTeacher = useAddTeacher();

  return (
    <div className="w-[450px]">
      {addTeacher.error && (
        <div className=" text-red-600">{addTeacher.error.message}</div>
      )}

      <TeacherFormRe
        initialValues={initialValues}
        schema={validationSchema}
        onSubmit={(values: Teacher) => addTeacher.mutate(values)}
      />
    </div>
  );
};

export default TeacherForm;
