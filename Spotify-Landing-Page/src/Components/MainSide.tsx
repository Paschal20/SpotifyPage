import TextDiv from "./TextDiv";
import MainCard from "./MainCard";

const MainSide = () => {
  return (
    <div className="w-[850px] h-screen bg-gradient-to-b from-[#3E1017] to-[#121212] mr-5 rounded-2xl flex flex-col items-center">
      <div className="flex flex-col w-[85%] bg-amber-400 h-auto mt-6">
        <div className="flex items-center w-[100%] gap-3 ">
          <TextDiv
            Content="All"
            TextColor="text-black"
            BgColor="bg-white"
            Rounded="rounded-xl"
          />
          <TextDiv
            Content="Music"
            BgColor="bg-[#595153]"
            Rounded="rounded-xl"
          />
          <TextDiv
            Content="Podcasts"
            BgColor="bg-[#595153] "
            Rounded="rounded-xl"
          />
        </div>

        <div className="flex flex-wrap">
          <div className="mt-3">
            <MainCard />
            <MainCard />
          </div>
          <div className="mt-3">
            <MainCard />
            <MainCard />
          </div>
          <div className="mt-3">
            <MainCard />
            <MainCard />
          </div>
          <div className="mt-3">
            <MainCard />
            <MainCard />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MainSide;
