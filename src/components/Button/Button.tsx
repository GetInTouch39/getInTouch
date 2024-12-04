import "./Button.css";
interface Props {
  buttonLabel: string;
  disable: boolean;
  onSubmit?: () => void;
  btnType?: "submit" | "reset" | "button";
}
const Button = ({ buttonLabel, onSubmit, btnType, disable }: Props) => {
  return (
    <button
      disabled={disable}
      type={btnType}
      onClick={onSubmit}
      className="btn"
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
