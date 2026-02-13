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

import TheCatchPage from "./components/2_the_catch_page";
import EngulfingPage from "./components/1_engulfing_page";


function MainPage() {
  return (
    <div className="mx-auto">
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
      </Routes>
    </>
  );
}

export default App;
