import { IconType } from "react-icons";
import {
  FaHome,
  FaScroll,
  FaCog,
  FaUserGraduate,
  FaSignOutAlt,
  FaChartLine,
  FaUserTie,
  FaCalendarCheck,
  FaChalkboard,
  FaBookOpen,
  FaComments,
  FaCreditCard,
  FaAddressBook,
} from "react-icons/fa";
import { MdAssignment, MdMenuBook, MdEmojiEvents } from "react-icons/md";

export const genre = [
  {
    _id: "674801cd54095af29338c5ef",
    label: "dashboard",
    __v: 0,
  },
  {
    _id: "6748029154095af29338c5f7",
    label: "teachers",
    __v: 0,
  },
  {
    _id: "6748032254095af29338c5ff",
    label: "courses",
    __v: 0,
  },
  {
    _id: "674808a954095af29338c606",
    label: "levels",
    __v: 0,
  },
  {
    _id: "674808b554095af29338c608",
    label: "students",
    __v: 0,
  },
  {
    _id: "6748098e54095af29338c60e",
    label: "attendis",
    __v: 0,
  },
  {
    _id: "6748099a54095af29338c610",
    label: "exams",
    __v: 0,
  },
  {
    _id: "674809a454095af29338c612",
    label: "performance",
    __v: 0,
  },
  {
    _id: "674809b154095af29338c614",
    label: "announcements",
    __v: 0,
  },
  {
    _id: "674809c054095af29338c616",
    label: "conversations",
    __v: 0,
  },
  {
    _id: "674809c454095af29338c618",
    label: "events",
    __v: 0,
  },
  {
    _id: "674809ca54095af29338c61a",
    label: "fees",
    __v: 0,
  },
  {
    _id: "674809d354095af29338c61c",
    label: "profile",
    __v: 0,
  },
  {
    _id: "674809da54095af29338c61e",
    label: "contactUs",
    __v: 0,
  },
  {
    _id: "67480b2454095af29338c629",
    label: "logout",
    __v: 0,
  },
];
export default genre;

export const IconMap: { [key: string]: IconType } = {
  dashboard: FaHome,
  courses: FaBookOpen,
  levels: FaChalkboard,
  students: FaUserGraduate,
  teachers: FaUserTie,
  attendis: FaCalendarCheck,
  subject: MdMenuBook,
  exams: MdAssignment,
  performance: FaChartLine,
  announcements: FaScroll,
  conversations: FaComments,
  events: MdEmojiEvents,
  fees: FaCreditCard,
  profile: FaCog,
  contactUs: FaAddressBook,
  logout: FaSignOutAlt,
};
