import Button from "./Button/Button";
import { useFormikContext } from "formik";
interface Props {
  disable: boolean;
  label: string;
  btnType?: "submit" | "reset" | "button";
}
export const FormButton = ({ label, btnType, disable }: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      disable={disable}
      onSubmit={handleSubmit}
      btnType={btnType}
      buttonLabel={label}
    ></Button>
  );
};
