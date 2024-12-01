import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { ColorScheme } from "../react-query/data/teacher";

interface IconLinkProps {
  label: string;
  href: string;
  Icon: IconType;
}

const IconLink = ({ href, Icon, label }: IconLinkProps) => {
  const getColor = (label: string): string => {
    const obj = ColorScheme[label];
    return obj?.color;
  };

  if (!(href && label)) return null;

  return (
    <Link
      to={href}
      target={"_blank"}
      className={`${getColor(
        label
      )} text-xl sm:text-2xl md:text-3xl transform transition-all hover:scale-110 `}
    >
      <Icon />
    </Link>
  );
};

export default IconLink;
