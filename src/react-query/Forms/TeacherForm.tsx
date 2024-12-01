import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField";
import { FormButton } from "../../components/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import { Teacher } from "../services/teacherService";
import axios from "axios";

interface ProfileInfo {
  text: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
}

interface FormValues {
  [key: string]: any;
  teacherName: string;
  profileImage: string;
  subject: string;
  profileInfo: ProfileInfo[];
  socialLinks: SocialLink[];
}

const initialValues: FormValues = {
  teacherName: "",
  profileImage: "",
  subject: "",
  profileInfo: [
    {
      text: "",
      label: "education",
    },
    { text: "", label: "phone" },
    { text: "", label: "email" },
    { text: "", label: "address" },
  ],
  socialLinks: [
    { href: "", label: "facebook" },
    { href: "", label: "whatsapp" },
    { href: "", label: "instagram" },
    { href: "", label: "twitter" },
    { href: "", label: "linkedIn" },
  ],
};

const validationSchema = Yup.object().shape({
  teacherName: Yup.string().required("Name is required"),
  profileImage: Yup.string(),
  subject: Yup.string().required("Subject is required"),
  profileInfo: Yup.array().of(
    Yup.object().shape({
      text: Yup.string(),
      label: Yup.string().required(),
    })
  ),
  socialLinks: Yup.array().of(
    Yup.object().shape({
      href: Yup.string(),
      label: Yup.string().required(),
    })
  ),
});

const TeacherForm = () => {
  const navigate = useNavigate();
  const addTeacher = useMutation<Teacher, Error, FormValues>({
    mutationFn: (values: FormValues) =>
      axios
        .post<Teacher>("http://localhost:3000/api/teachersx", values)
        .then((res) => res.data),
    onMutate(variables) {
      console.log("Mutation initiated with variables:", variables);
    },
    onError(error) {},
    onSuccess(data) {
      navigate(-1);
    },
  });

  return (
    <div className="w-[450px]">
      {addTeacher.error && (
        <div className=" text-red-600">{addTeacher.error.message}</div>
      )}
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues) => {
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
          <FormButton label="Save" btnType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default TeacherForm;
