interface Props {
  image: string;
}
export const ProfilePicRound = ({ image }: Props) => {
  return (
    <div className="rounded-full bg-white w-48 h-48 md:w-32 md:h-32 lg:w-48 lg:h-48  shadow-xl overflow-hidden">
      <img src={image} alt="" />
    </div>
  );
};
