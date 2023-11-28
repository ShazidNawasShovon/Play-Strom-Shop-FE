import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import PageNotFound from "./Pages/404/404";

import Banner from "./Components/Banner/Banner";
import Statics from "./Components/Statics/Statics";
import NFT_DigitalArt from "./Components/NFT_DigitalArt/NFT_DigitalArt";
import HotBids from "./Components/HotBids/HotBids";
import PopularCollection from "./Components/PopularCollection/PopularCollection";
import CandSNFT from "./Components/CandSNFT/CandSNFT";
import PlayStromRoad from "./Components/PlayStromRoad/PlayStromRoad";
import Minting from "./Components/Minting/Minting";
import TopArtM from "./Components/TopArtM/TopArtM";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Banner />
        <Statics />
        <HotBids />
        <NFT_DigitalArt />
        <PopularCollection />
        <CandSNFT />
        <PlayStromRoad />
        <TopArtM />
        <Minting />
        {/* <PageNotFound /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
