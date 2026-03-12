import { Routes, Route } from "react-router-dom";


import Utama from "./pages/utama";

import App_raiden from "./App_raiden";


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
      </Routes>
    </>
  );
}

export default App;