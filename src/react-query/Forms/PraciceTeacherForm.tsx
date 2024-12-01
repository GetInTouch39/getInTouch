import { useFormik, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

interface ProfileInfo {
  text: string;
}

interface SocialLink {
  href: string;
}

interface FormValues {
  name: string;
  subject: string;
  profileInfo: ProfileInfo[];
  socialLinks: SocialLink[];
}

const initialValues: FormValues = {
  name: "Professor Majid",
  subject: "Physics",
  profileInfo: [
    { text: "Punjab College JPPW" },
    { text: "03038200039" },
    { text: "mkashifshahzad125@gmail.com" },
    { text: "chak86M tehsil jppw" },
  ],
  socialLinks: [
    { href: "https://facebook.com" },
    { href: "https://instagram.com" },
    { href: "https://linkedin.com" },
    { href: "https://linkedin.com" },
  ],
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  subject: Yup.string().required("Subject is required"),
  profileInfo: Yup.array()
    .of(
      Yup.object().shape({
        text: Yup.string().required("Text is required"),
      })
    )
    .required("Profile Info is required"),
  socialLinks: Yup.array()
    .of(
      Yup.object().shape({
        href: Yup.string()
          .url("Must be a valid URL")
          .required("URL is required"),
      })
    )
    .required("Social Links are required"),
});

const TeacherForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      navigate(-1);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 p-4 max-w-lg mx-auto"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 p-2 w-full border rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 p-2 w-full border rounded"
          />
          {formik.touched.subject && formik.errors.subject && (
            <div className="text-red-500 text-sm">{formik.errors.subject}</div>
          )}
        </div>
        {/* Profile Info */}
        <div>
          <h3 className="text-lg font-bold">Profile Info</h3>
          {formik.values.profileInfo.map((info, index) => {
            const labels = ["Education", "Phone", "Email", "Address"]; // Define labels
            return (
              <div key={index} className="mt-4">
                <label
                  htmlFor={`profileInfo[${index}].text`}
                  className="block text-gray-700 font-medium"
                >
                  {labels[index]}
                </label>
                <input
                  type="text"
                  id={`profileInfo[${index}].text`}
                  name={`profileInfo[${index}].text`}
                  value={info.text}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={labels[index]}
                  className="p-2 border rounded w-full mt-1"
                />
                {formik.touched.profileInfo?.[index]?.text &&
                  formik.errors.profileInfo?.[index]?.text && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.profileInfo[index].text}
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold">Social Links</h3>
          {formik.values.socialLinks.map((link, index) => {
            const labels = ["Facebook", "Instagram", "LinkedIn", "Twitter"];
            return (
              <div key={index} className="mt-4">
                <label
                  htmlFor={`socialLinks[${index}].href`}
                  className="block text-gray-700 font-medium"
                >
                  {labels[index]}
                </label>
                <input
                  type="text"
                  id={`socialLinks[${index}].href`}
                  name={`socialLinks[${index}].href`}
                  value={link.href}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={`Enter ${labels[index]} URL`}
                  className="p-2 border rounded w-full mt-1"
                />
                {formik.touched.socialLinks?.[index]?.href &&
                  formik.errors.socialLinks?.[index]?.href && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.socialLinks[index].href}
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </FormikProvider>
  );
};

export default TeacherForm;
