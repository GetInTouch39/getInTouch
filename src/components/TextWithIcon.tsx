import { IconType } from "react-icons";

interface Props {
  text: string;
  Icon: IconType;
}

const TextWithIcon = ({ text, Icon }: Props) => {
  if (text === "") return null;
  return (
    <div className="grid grid-cols-[10%_80%] gap-2 ">
      {text && <Icon color="#38d39f" size={25} />}
      <div className="capitalize truncate max-w-xs sm:max-w-md md:max-w-lg">
        {text}
      </div>
    </div>
  );
};

export default TextWithIcon;
