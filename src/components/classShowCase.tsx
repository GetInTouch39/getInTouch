import { FaPlus } from "react-icons/fa";

interface Props {
  name?: string;
}

const classShowCase = ({ name }: Props) => {
  return (
    <div className="bg-slate-100 flex-1 min-w-60 max-w-60 min-h-60  flex justify-center items-center m-4 shadow-xl">
      {name ? name : <FaPlus size={20} color="#1f2937" />}
    </div>
  );
};

export default classShowCase;
