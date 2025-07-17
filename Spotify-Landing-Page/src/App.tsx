import Header from "./Components/Header";
import LeftSideBar from "./Components/LeftSideBar";
import MainSide from "./Components/MainSide";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <LeftSideBar />
        <MainSide />
      </div>
    </>
  );
};

export default App;
