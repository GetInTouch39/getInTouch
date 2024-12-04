import Form from "../../components/Form/Form";
import FormField from "../../components/FormField";
import { FormButton } from "../../components/SubmitButton";
import useAddTeacher from "../hooks/useAddTeacher";
import validationSchema, { initialValues } from "../data/teacher";

export interface ProfileInfo {
  _id?: string;
  text: string;
  label: string;
}

export interface SocialLink {
  _id?: string;
  href: string;
  label: string;
}

export interface Teacher {
  _id?: string;
  [key: string]: unknown;
  teacherName: string;
  profileImage: string;
  subject: string;
  profileInfo: ProfileInfo[];
  socialLinks: SocialLink[];
}

const TeacherForm = () => {
  const addTeacher = useAddTeacher();

  return (
    <div className="w-[450px]">
      {addTeacher.error && (
        <div className=" text-red-600">{addTeacher.error.message}</div>
      )}
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: Teacher) => {
          addTeacher.mutate(values);
        }}
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
          {initialValues.profileInfo.map((_, index) => (
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
          {initialValues.socialLinks.map((_, index) => (
            <FormField<Teacher>
              key={`socialLinks[${index}]`}
              name={`socialLinks[${index}].href`}
              label={_.label}
              inputType="text"
            />
          ))}
        </div>
        <div className="mt-6">
          <FormButton
            disable={addTeacher.isPending}
            label={addTeacher.isPending ? "Saving" : "Save"}
            btnType="submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default TeacherForm;
