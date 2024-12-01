import SidebarItem from "./SidebarItem";
import { useState, useCallback } from "react";
import useGenre from "../react-query/hooks/useGenre";
import { IconMap } from "../react-query/data/genre";
import ProfilePic from "../assets/IMG-20190821-WA0007.jpg";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [genre, setGenre] = useState("");
  const { data: genreList } = useGenre();

  const handleSelectItem = useCallback((label: string) => {
    setGenre(label);
  }, []);

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out bg-gray-800 text-white w-64 z-50
      md:relative md:translate-x-0`}
    >
      {isOpen && (
        <div className="flex items-center justify-between p-4 md:hidden">
          <button onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="flex flex-col items-center mt-10">
        <div className="w-20 h-20 border-2 border-gray-800 overflow-hidden rounded-full shadow-[0px_0px_0px_3px_white]">
          <img src={ProfilePic} alt="Profile" className="w-full h-full" />
        </div>
        <div className="userName mt-2 text-lg font-semibold">
          School Profile
        </div>
      </div>
      <nav className="mt-10">
        {genreList?.map((item) => (
          <SidebarItem
            key={item._id}
            label={item.label}
            IconComponent={IconMap[item.label]}
            onSelectItem={() => handleSelectItem(item.label)}
            selectedItem={genre}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
