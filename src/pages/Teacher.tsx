import { Link } from "react-router-dom";
import TeacherProfileCard from "../components/TeacherProfileCard";

import useTeacher from "../react-query/hooks/useTeacher";

const Teacher = () => {
  const { data: teachers } = useTeacher();

  return (
    <>
      <Link to={"teacherForm"}>Add</Link>
      {teachers?.map((teacher) => (
        <TeacherProfileCard
          key={teacher._id}
          profileInfo={teacher.profileInfo}
          socialLinks={teacher.socialLinks}
          profileImg={teacher.profileImage}
          teacherName={teacher.teacherName}
          subject={teacher.subject}
        />
      ))}
    </>
  );
};

export default Teacher;
