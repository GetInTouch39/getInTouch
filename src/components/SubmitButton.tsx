import Button from "./Button/Button";
import { useFormikContext } from "formik";
interface Props {
  label: string;
  btnType?: "submit" | "reset" | "button";
}
export const FormButton = ({ label, btnType }: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      onSubmit={handleSubmit}
      btnType={btnType}
      buttonLabel={label}
    ></Button>
  );
};
