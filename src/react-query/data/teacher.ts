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
