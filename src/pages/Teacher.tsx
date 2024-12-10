import { Link } from "react-router-dom";
import TeacherProfileCard from "../components/TeacherProfileCard";
import useAllTeacher from "../react-query/hooks/useAllTeacher";

const TeacherMap = () => {
  const { data: teachers } = useAllTeacher();
  return (
    <>
      <Link to={"teacherForm"}>Add</Link>

      {teachers?.map((teacher) => (
        <div key={teacher._id}>
          <TeacherProfileCard teacher={teacher} />
          <Link className="absolute" to={`teacherUpd/${teacher._id}`}>
            goto Edit
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeacherMap;
