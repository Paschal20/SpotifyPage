type MainCardProps = {
  Src: string;
  Content1: string;
  Content2: string;
};
const MainCard: React.FC<MainCardProps> = ({ Src, Content1, Content2 }) => {
  return (
    <div className="flex items-center w-[170px] bg-[#3e3d3c] mt-2 ">
      <div className="w-[45px] h-[45px]">
        <img src={Src} alt="" className="w-[100%] h-[100%] object-fill" />
      </div>
      <div className="flex flex-col items-left ml-2  bg-[#3e3d3c] ">
        <p className="font-bold text-[12px]">{Content1}</p>
        <p className="text-[10px]">{Content2}</p>
      </div>
    </div>
  );
};
export default MainCard;
