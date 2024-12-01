import ClassShowCase from "../components/classShowCase";
import useClass from "../react-query/hooks/useClasses";

const Levels = () => {
  const { data: levels } = useClass();

  return (
    <div className="flex flex-wrap flex-col items-start justify-start w-full h-full md:flex-row ">
      <ClassShowCase />
      {levels?.map((l) => (
        <ClassShowCase key={l._id} name={l.label} />
      ))}
    </div>
  );
};

export default Levels;
