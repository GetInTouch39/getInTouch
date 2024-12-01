import "./Button.css";
interface Props {
  buttonLabel: string;
  onSubmit?: () => void;
  btnType?: "submit" | "reset" | "button";
}
const Button = ({ buttonLabel, onSubmit, btnType }: Props) => {
  return (
    <button type={btnType} onClick={onSubmit} className="btn">
      {buttonLabel}
    </button>
  );
};

export default Button;
