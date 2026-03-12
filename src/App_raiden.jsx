import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/raiden_page/1_home";
import Detail from "./pages/raiden_page/2_detail";
import Region from "./pages/raiden_page/3_region";
import Element from "./pages/raiden_page/4_element";
import Funfact from "./pages/raiden_page/5_funfact_page";
import Becoming from "./pages/raiden_page/6_becoming_page";
import Friend from "./pages/raiden_page/7_bestfriend_page";
import Build from "./pages/raiden_page/8_buildraiden_page";
import WeaponDekstop from "./pages/raiden_page/9_weapon_page";
import Ascension from "./pages/raiden_page/10_ascension_page";
import Guide from "./pages/raiden_page/11_guide_page";
import Team from "./pages/raiden_page/12_team_page";
import Footer from "./pages/raiden_page/13_footer";

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
    <div className="w-full overflow-x-hidden overflow-y-hidden bg-[#310056]">
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


function App_raiden() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="the_catch" element={<TheCatchPage />} />
        <Route path="sign" element={<EngulfingPage />} />
        <Route path="Anneyatco" element={<Anneyatco />} />
        <Route path="Miyukisawashiro" element={<Miyukisawashiro />} />
        <Route path="Juhuahua" element={<Juhuahua />} />
        <Route path="Parkjiyoon" element={<Parkjiyoon />} />
        <Route path="Act1" element={<Act1 />} />
        <Route path="Act2" element={<Act2 />} />
        <Route path="Act3" element={<Act3 />} />
        <Route path="Act4" element={<Act4 />} />
        <Route path="About_yaemiko" element={<About_yaemiko />} />
      </Routes>
    </>
  );
}

export default App_raiden;