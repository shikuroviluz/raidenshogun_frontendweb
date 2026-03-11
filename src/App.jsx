import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/1_home";
import Detail from "./pages/2_detail";
import Region from "./pages/3_region";
import Element from "./pages/4_element";
import Funfact from "./pages/5_funfact_page";
import Becoming from "./pages/6_becoming_page";
import Friend from "./pages/7_bestfriend_page";
import Build from "./pages/8_buildraiden_page";
import WeaponDekstop from "./pages/9_weapon_page";
import Ascension from "./pages/10_ascension_page";
import Guide from "./pages/11_guide_page";
import Team from "./pages/12_team_page";
import Footer from "./pages/13_footer";

import EngulfingPage from "./components/1_engulfing_page";
import TheCatchPage from "./components/2_the_catch_page";
import Anneyatco from "./components/va_anne_yatco";
import Miyukisawashiro from "./components/va_miyuki_sawashiro";
import Juhuahua from "./components/va_juhuahua";
import Parkjiyoon from "./components/va_park_ji-yoon";
import Act1 from "./components/act1";
import Act2 from "./components/act2";
import Act3 from "./components/act3";
import Act4 from "./components/act4";
import About_yaemiko from "./components/about_yaemiko";


function MainPage() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Home />
      <Detail />
      <Region />
      <Element />
      <Funfact />
      <Becoming />
      <Friend />
      <Build />
      <WeaponDekstop/>
      <Ascension/>
      <Guide/>
      <Team/>
      <Footer/>
    </div>
  );
}


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/the_catch" element={<TheCatchPage />} />
        <Route path="/sign" element={<EngulfingPage />} />
        <Route path="/Anneyatco" element={<Anneyatco />} />
        <Route path="/Miyukisawashiro" element={<Miyukisawashiro />} />
        <Route path="/Juhuahua" element={<Juhuahua />} />
        <Route path="/Parkjiyoon" element={<Parkjiyoon />} />
        <Route path="/Act1" element={<Act1 />} />
        <Route path="/Act2" element={<Act2 />} />
        <Route path="/Act3" element={<Act3 />} />
        <Route path="/Act4" element={<Act4 />} />
        <Route path="/About_yaemiko" element={<About_yaemiko />} />
      </Routes>
    </>
  );
}

export default App;
