import TextDiv from "./TextDiv";
import MainCard from "./MainCard";
import Mother from "../assets/MotherMary.webp";
import LivingVoices from "../assets/LivingVoices.jpeg";
import Liturgy from "../assets/LiturgyOfChrysstosom.jpeg";
import Heavenly from "../assets/HeavenlyRevelations.jpeg";
import Floriani from "../assets/Floriani.jpeg";
import Faire from "../assets/FaireIsHeaven.jpeg";
import En from "../assets/en.jpeg";
import LatinClassics from "../assets/CatholicLatinClassics.jpeg";

const MainSide = () => {
  return (
    <div className="w-[850px] h-screen bg-gradient-to-b from-[#3E1017] to-[#121212] mr-5 rounded-2xl flex flex-col items-center">
      <div className="flex flex-col w-[85%] h-auto mt-6">
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

        <div className="flex flex-wrap gap-2">
          <div className="mt-3">
            <MainCard
              Src={Mother}
              Content1="Holy Mary"
              Content2="Praises of Mary"
            />
            <MainCard
              Src={LivingVoices}
              Content1="Living Voices"
              Content2="James WhitBourn"
            />
          </div>
          <div className="mt-3">
            <MainCard
              Src={Liturgy}
              Content1="Liturgy of St John"
              Content2="Pyotr Hirch"
            />
            <MainCard
              Src={Heavenly}
              Content1="Heavenly Rev.."
              Content2="St Hildegard"
            />
          </div>
          <div className="mt-3">
            <MainCard
              Src={Floriani}
              Content1="Floriani Sacred Music"
              Content2="Floriani Group"
            />
            <MainCard
              Src={Faire}
              Content1="Music of the.."
              Content2="Faire is Music"
            />
          </div>
          <div className="mt-3">
            <MainCard Src={En} Content1="Alma Redemptoris" Content2="Radio" />
            <MainCard
              Src={LatinClassics}
              Content1="Catholic Latin Classics"
              Content2="Cathedral Music"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div>
          <div>Made for</div>
          <div className="flex w-6 w-full ">
            <p className="font-bold text-2xl">MagentaXD</p>
            <p>Show All</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSide;
