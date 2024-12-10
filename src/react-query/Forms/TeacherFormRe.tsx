import { ProfileInfo, SocialLink, Teacher } from "../services/teacherService";
import FormField from "../../components/FormField";
import { FormButton } from "../../components/SubmitButton";
import Form from "../../components/Form/Form";
interface InputTeacherFormProps {
  initialValues: Teacher;
  schema: object;
  onSubmit: (values: Teacher) => void;
}
const TeacherFormRe = ({
  onSubmit,
  schema,
  initialValues,
}: InputTeacherFormProps) => {
  return (
    <Form
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values: Teacher) => onSubmit(values)}
    >
      <div className="my-4">
        <FormField<Teacher>
          name="teacherName"
          label="Teacher Name"
          inputType="text"
        />
      </div>
      <div className="my-4">
        <FormField<Teacher> name="subject" label="Subject" inputType="text" />
      </div>
      <div className="my-4">
        <h4 className="font-bold">Profile Information</h4>
        {initialValues?.profileInfo.map((_: ProfileInfo, index: number) => (
          <FormField<Teacher>
            key={`profileInfo[${index}]`}
            name={`profileInfo[${index}].text`}
            label={_.label}
            inputType="text"
          />
        ))}
      </div>
      <div className="my-4">
        <h4 className="font-bold">Social Links</h4>
        {initialValues?.socialLinks.map((_: SocialLink, index: number) => (
          <FormField<Teacher>
            key={`socialLinks[${index}]`}
            name={`socialLinks[${index}].href`}
            label={_.label}
            inputType="text"
          />
        ))}
      </div>
      <div className="mt-6">
        <FormButton label={"Save"} btnType="submit" disable={false} />
      </div>
    </Form>
  );
};

export default TeacherFormRe;
