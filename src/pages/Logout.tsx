import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Are you want to logout?</div>;
      <Button
        btnType="submit"
        buttonLabel={"LOGOUT"}
        onSubmit={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      />
    </>
  );
};

export default Logout;
