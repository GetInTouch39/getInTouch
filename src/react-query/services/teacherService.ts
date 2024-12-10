import APIClient from "./apiClient";

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

export default new APIClient<Teacher>("/teachers");
