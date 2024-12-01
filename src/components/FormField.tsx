import { useFormikContext } from "formik";
import ErrorMessages from "./ErrorMessages";
import InputField from "./InputField/InputField";
import { IconType } from "react-icons";

interface Props<T> {
  Icon?: IconType;
  name: keyof T | string;
  label: string;
  inputType: string;
  allProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const FormField = <T extends Record<string, unknown>>({
  Icon,
  name,
  label,
  inputType,
  ...allProps
}: Props<T>) => {
  const { handleChange, setFieldTouched, errors, touched } =
    useFormikContext<T>();

  return (
    <>
      <InputField
        inputType={inputType}
        placeholder={label}
        {...allProps}
        Icon={Icon}
        onChange={handleChange(name as string)}
        onBlur={() => setFieldTouched(name as string)}
      />
      <ErrorMessages
        error={errors[name] as string | undefined}
        vissible={touched[name] as boolean | undefined}
      />
    </>
  );
};

export default FormField;
