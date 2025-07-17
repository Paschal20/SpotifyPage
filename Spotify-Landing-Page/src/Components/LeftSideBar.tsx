import LeftCardLine from "./LeftCardLine.tsx";
import TextDiv from "./TextDiv.tsx";
import Calvary from "../assets/Calvary.jpeg";
import SunriseMass from "../assets/SunriseMass.jpeg";
import Thisis from "../assets/ThisIsStHildegard.webp";
import STFaustina from "../assets/StFaustinaDiary.jpeg";
import Renai from "../assets/RenaissanceMasterpeices.jpeg";
import ProMusica from "../assets/ProMusicaAlleluia.jpeg";

const LeftBar = () => {
  return (
    <div className="flex flex-col items-center bg-[#121212]  w-110 ml-3 h-auto rounded-2xl">
      <div className="flex items-center mt-3 justify-between w-[90%]">
        <h2 className="text-white font-bold">Your Library</h2>
        <div className="  flex items-center gap-1 -mr-3">
          <div className="bg-[#282828] rounded-md px-2 gap-2  text-white font-bold  h-7 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="e-91000-icon e-91000-baseline"
              viewBox="0 0 16 16"
              style={{ fill: "white" }}
              height={"16"}
              width={"16"}
            >
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75"></path>
            </svg>
            Create
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-[90%] mt-5">
        <TextDiv Content="Playlists" />
        <TextDiv Content="Artists" />
        <TextDiv Content="Albums" />
        <TextDiv Content="Podcasts&Shows" />
      </div>

      <div className="flex items-center justify-between w-[90%] mt-5">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="gray"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="flex items-center">
          Recent{" "}
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="mt-5">
        <LeftCardLine
          Src={Calvary}
          Title="Your Episodes"
          SubTitle="Saved & downloaded songs"
        />
        <LeftCardLine
          Src={SunriseMass}
          Title="Liked Songs"
          SubTitle="Playlist"
        />
        <LeftCardLine
          Src={Thisis}
          Title="This is St Hildegard "
          SubTitle="St Hildegard Von bingen"
        />
        <LeftCardLine
          Src={STFaustina}
          Title="Diary of St Faustina"
          SubTitle="St Faustina"
        />
        <LeftCardLine
          Src={Renai}
          Title="Renaissance Music"
          SubTitle="Concert Singers"
        />
        <LeftCardLine
          Src={ProMusica}
          Title="Pro Music"
          SubTitle="Promusica"
        />
      </div>
    </div>
  );
};

export default LeftBar;
