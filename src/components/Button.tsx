interface ButtonProps {
  text: React.ReactNode;
  link: string;
target?: '_blank' | '_self';
}
const Button = ({ text, link, target = '_self' }: ButtonProps) => {
  return (
    <a
      href={link}
      target={target}
      style={{color: 'red'}}
      className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg mt-4 text-2xl"
    >
      {text}
    </a>
  );
};

export default Button;
