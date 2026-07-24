import { Routes, Route } from "react-router-dom";


import Utama from "./pages/utama";

import App_raiden from "./App_raiden";
import App_sensor from "./App_sensor";


function MainPage() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">

      <Utama/>
    </div>
  );
}


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/App_raiden/*" element={<App_raiden />} />
        <Route path="/App_sensor/*" element={<App_sensor />}/>
      </Routes>
    </>
  );
}

export default App;