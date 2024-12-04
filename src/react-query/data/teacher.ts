import { IconType } from "react-icons";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import * as Yup from "yup";
import { Teacher } from "../Forms/TeacherForm";

export const ProfileInfoIconMap: { [key: string]: IconType } = {
  phone: FaPhoneAlt,
  email: FaEnvelope,
  education: FaGraduationCap,
  address: FaMapMarkerAlt,
};
export const SocialIconMap: { [key: string]: IconType } = {
  facebook: FaFacebook,
  whatsapp: IoLogoWhatsapp,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedIn: FaLinkedin,
};
export const ColorScheme: { [key: string]: { color: string } } = {
  facebook: { color: "text-blue-600" },
  whatsapp: { color: "text-green-700" },
  instagram: { color: "text-pink-600" },
  twitter: { color: "text-blue-400" },
  linkedIn: { color: "text-blue-700" },
};

export const initialValues: Teacher = {
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
export default validationSchema;
