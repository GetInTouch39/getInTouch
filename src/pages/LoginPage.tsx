import FormFrame from "../components/FormFrame/FormFrame";
import { FaUser, FaLock } from "react-icons/fa";
import * as Yup from "yup";
import FormField from "../components/FormField";
import { FormButton } from "../components/SubmitButton";
import Form from "../components/Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export interface LoginFormValues {
  email: string;
  password: string;
}

const validatingSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").min(10).max(300),
  password: Yup.string().required().min(5).max(255).label("Password"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const tokken = localStorage.getItem("token");

  if (tokken) navigate("/layout/dashboard");

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth",
        values
      );
      const result = await response.data;
      const decoded = jwtDecode(result);
      console.log(decoded);

      if (result) {
        navigate("/layout/dashboard");
        localStorage.setItem("token", result);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <FormFrame>
      <div className="p-8 w-[500px]">
        <h2 className="font-bold font-poppins text-[4rem] uppercase text-gray-800 text-center">
          EMS
        </h2>

        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validatingSchema}
          onSubmit={onSubmit}
        >
          <div className="my-8 relative">
            <FormField
              Icon={FaUser}
              name={"email"}
              label={"Username"}
              inputType="text"
            />
          </div>
          <div className="my-8 relative">
            <FormField
              Icon={FaLock}
              name={"password"}
              label="Password"
              inputType="password"
            />
          </div>

          <div className="my-10">
            <FormButton label="Login" btnType={"submit"} />

            <div className="loginFormLinks text-gray-500 flex justify-center my-2 text-sm">
              <a className="forgetPassword hover:text-[#38d39f] transition duration-100 font-sans cursor-pointer">
                Forget Password?
              </a>
              <div className="mx-4 text-gray-500">|</div>
              <a className="hover:text-[#38d39f] transition duration-100 font-sans cursor-pointer">
                Create a new account
              </a>
            </div>
          </div>
        </Form>
      </div>
    </FormFrame>
  );
};

export default LoginPage;
