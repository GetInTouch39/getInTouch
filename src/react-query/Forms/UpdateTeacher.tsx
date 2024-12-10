import useOneTeacher from "../hooks/useOneTeacher";
import { useParams } from "react-router-dom";
import useUpdateTeacher from "../hooks/useUpdateTeacher";
import TeacherFormRe from "./TeacherFormRe";
import { Teacher } from "../services/teacherService";
import validationSchema, { initialValues } from "../data/teacher";

const UpdateTeacher = () => {
  const { id } = useParams();

  const { data: teacher } = useOneTeacher(id!);

  return (
    <>
      <div>{teacher?.teacherName}</div>
      <TeacherFormRe
        initialValues={initialValues}
        schema={validationSchema}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        onSubmit={(values: Teacher) => useUpdateTeacher(values)}
      />
    </>
  );
};

export default UpdateTeacher;
