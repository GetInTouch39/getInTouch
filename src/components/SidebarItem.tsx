import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  label: string;
  IconComponent: IconType;
  selectedItem: string;
  onSelectItem: () => void;
}

const SidebarItem = ({
  label,
  IconComponent,
  onSelectItem,
  selectedItem,
}: Props) => {
  const active = label === selectedItem;

  return (
    <div
      onClick={onSelectItem}
      className={`flex items-center py-2 px-8 hover:bg-gray-700 ${
        active ? "bg-gray-700" : ""
      }`}
    >
      {IconComponent && <IconComponent className="mr-3" />}
      <p
        className={active ? "scale-105 font-semibold capitalize" : "capitalize"}
      >
        <Link to={`${label}`}>{label}</Link>
      </p>
    </div>
  );
};

export default SidebarItem;
