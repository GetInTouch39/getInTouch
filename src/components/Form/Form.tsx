import { Formik, FormikValues } from "formik";
import { ReactNode } from "react";

interface Props<T extends FormikValues> {
  children: ReactNode;
  initialValues: T;
  validationSchema: object;
  onSubmit: (values: T) => void;
}
const Form = <T extends FormikValues>({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: Props<T>) => {
  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
