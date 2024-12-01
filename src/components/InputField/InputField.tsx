import { useState } from "react";
import "./InputField.css";
import { IconType } from "react-icons";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: string;
  Icon: IconType | undefined;
  placeholder: string;

  allProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({ placeholder, inputType, Icon, ...allProps }: Props) => {
  const [isfocus, setIsFocus] = useState(false);

  return (
    <div
      className={`input-div w-full border-b-[2px] border-b-[#d9d9d9] relative py-1 grid ${
        Icon && "grid-cols-[7%_93%]"
      } ${isfocus && "focus"}`}
    >
      <div className="i">
        {Icon && (
          <Icon
            className="ii"
            size={20}
            color={isfocus ? "#38d39f" : "#d9d9d9"}
          />
        )}
      </div>
      <div className="input ">
        <input
          {...allProps}
          onFocus={() => setIsFocus(true)}
          type={inputType}
          className="inputField peer absoltue left-0  p-[0.1rem_0.6rem] text-[1.4rem]  font-[Poppins] w-full border-none outline-none bg-transparent text-[#555555]"
        />
        <h5
          className={
            "inputLabel focus:top-[-5px] focus:text-[1.1rem] capitalize"
          }
        >
          {placeholder}
        </h5>
      </div>
    </div>
  );
};

export default InputField;
