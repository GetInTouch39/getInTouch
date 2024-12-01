import "react-circular-progressbar/dist/styles.css";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <main className="flex-1 p-4">
      <Outlet />
    </main>
  );
};

export default MainContent;
