import "./FormFrame.css";
import wave from "../../assets/bg_wave.png";
import potrait from "../../assets/Background.svg";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const FormFrame = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-28 h-screen">
      <div className="pr-0  hidden md:flex w-full h-full relative justify-end items-center">
        <img className=" w-full h-full absolute" src={wave} alt="wave" />
        <img className="z-10 w-[500px]" src={potrait} alt="potrait" />
      </div>
      <div className=" flex justify-center md:justify-start items-center">
        {children}
      </div>
    </div>
  );
};

export default FormFrame;
