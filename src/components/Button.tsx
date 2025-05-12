interface ButtonProps {
  text: React.ReactNode;
  link: string ;
target?: '_blank' | '_self';
  classNam: string | undefined;
  onClickk?: () => void;
  icon?: React.ReactNode;
}
const Button = ({ text, link, target = '_self', classNam,icon, onClickk }: ButtonProps) => {
  return (
    <a
      href={link}
      target={target}
      // style={{color: 'red'}}
      onClick={onClickk}
      style={{ fontFamily: 'Aeonik, sans-serif' }}
      className={`bg-orange-400 cursor-pointer text-white px-4 py-3 rounded-4xl mt-4 lg:text-sm text-[12px] flex items-center gap-2  ${classNam}`}
    >
     {icon} {text}
    </a>
  );
};

export default Button;
