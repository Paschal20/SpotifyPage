type TextDivProps = {
  Content: string;
  BgColor?: string;
  TextColor?: string;
  Rounded?: string;
};

const TextDiv: React.FC<TextDivProps> = ({ Content, BgColor, TextColor, Rounded }) => {
  return (
    <div
      className={`px-3 text-[14px] bg-[#333333] ${Rounded} ${TextColor} py-1 ${BgColor} flex items-center justify-center rounded-full`}
    >
      {Content}
    </div>
  );
};

export default TextDiv;
