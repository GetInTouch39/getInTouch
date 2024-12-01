import TextWithIcon from "./TextWithIcon";
import { ProfilePicRound } from "./ProfilePicRound";
import { TeacherCardFrame } from "./TeacherCardFrame";
import { SocialIconMap, ProfileInfoIconMap } from "../react-query/data/teacher";
import SocialIconLink from "./SocialIconLink";

interface TecherData {
  _id: string;
  text: string;
  label: string;
}
interface SocialLinks {
  _id: string;
  href: string;
  label: string;
}
interface TeacherCardProps {
  profileInfo: TecherData[];
  socialLinks: SocialLinks[];
  profileImg: string;
  teacherName: string;
  subject: string;
}
const TeacherProfileCard = ({
  profileInfo,
  socialLinks,
  teacherName,
  profileImg,
  subject,
}: TeacherCardProps) => {
  return (
    <TeacherCardFrame>
      <div className="flex justify-center items-center z-10">
        <ProfilePicRound image={profileImg} />
      </div>
      <div className=" relative">
        <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 capitalize">
          {teacherName}
        </div>
        <div className=" text-l lg:text-xl font-medium text-gray-600 mb-2 capitalize">
          Subject : {subject}
        </div>
        <div className="text-md lg:text-lg font-medium text-gray-700 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {profileInfo.map((profile) => (
            <TextWithIcon
              key={profile._id}
              text={profile.text}
              Icon={ProfileInfoIconMap[profile.label]}
            />
          ))}
        </div>
        <div className="absolute -bottom-11 np">
          <div className="flex space-x-6 xl:space-x-16 justify-center mt-6 ">
            {socialLinks.map((social) => (
              <SocialIconLink
                key={social._id}
                label={social.label}
                href={social.href}
                Icon={SocialIconMap[social.label]}
              />
            ))}
          </div>
        </div>
      </div>
    </TeacherCardFrame>
  );
};

export default TeacherProfileCard;
