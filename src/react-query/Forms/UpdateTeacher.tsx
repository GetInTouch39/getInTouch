import useOneTeacher from "../hooks/useOneTeacher";
import { useParams } from "react-router-dom";
import useUpdateTeacher from "../hooks/useUpdateTeacher";
import TeacherFormRe from "./TeacherFormRe";
import { Teacher } from "../services/teacherService";
import validationSchema, { initialValues } from "../data/teacher";
import { useState } from "react";

const UpdateTeacher = () => {
  const [valuess, setValuess] = useState<Teacher>();
  const { id } = useParams();

  const { data: teacher, error } = useOneTeacher(id!);

  const updTeacher = useUpdateTeacher(valuess!, id!);
  const toBeUpdate = (teacher: Teacher) => {
    const Values: Teacher = teacher
      ? {
          teacherName: teacher.teacherName,
          profileImage: teacher.profileImage,
          subject: teacher.subject,
          profileInfo: teacher.profileInfo,
          socialLinks: teacher.socialLinks,
        }
      : initialValues;
    return Values;
  };

  return (
    <>
      <div>{teacher?.teacherName}</div>
      {error && <h2>{error.message}</h2>}
      <TeacherFormRe
        initialValues={toBeUpdate(teacher!)}
        schema={validationSchema}
        onSubmit={(values: Teacher) => {
          updTeacher.mutate(values);
          setValuess(values);
        }}
      />
    </>
  );
};

export default UpdateTeacher;
