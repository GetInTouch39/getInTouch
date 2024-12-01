import APIClient from "./apiClient";

interface ProfileInfo {
  _id: string;
  text: string;
  label: string;
}

interface SocialLink {
  _id: string;
  href: string;
  label: string;
}

export interface Teacher {
  [key: string]: unknown;
  _id: string;
  teacherName: string;
  profileImage: string;
  subject: string;
  profileInfo: ProfileInfo[];
  socialLinks: SocialLink[];
  __v: number;
}

export default new APIClient<Teacher>("/teachers");
