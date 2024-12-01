// src/components/Navbar.tsx
import { FaBars } from "react-icons/fa";
import img from "../assets//subtle-prism.svg";
import { useEffect, useState } from "react";
interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const checkHidden = () => {
    if (window.innerWidth >= 768) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    checkHidden();

    window.addEventListener("resize", checkHidden);

    return () => window.removeEventListener("resize", checkHidden);
  }, []);
  return (
    <header
      style={
        isHidden
          ? {
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { background: "none" }
      }
      className={`flex items-end ${
        isHidden && "h-[15rem]"
      } justify-between shadow-md px-4 py-2 headerbg`}
    >
      <div className={`flex  items-center`}>
        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          <FaBars className="w-6 h-6" />
        </button>
        <h1
          className={`${
            isHidden ? "text-4xl" : "text-xl"
          } font-bold font-halvitica`}
        >
          School Name here
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
