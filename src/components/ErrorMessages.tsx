interface Props {
  error?: string;
  vissible?: boolean;
}

const ErrorMessages = ({ error, vissible }: Props) => {
  if (!vissible || !error) return null;
  return <p className="text-red-600">{error}</p>;
};

export default ErrorMessages;
