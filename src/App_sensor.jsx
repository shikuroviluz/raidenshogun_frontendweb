import { Routes, Route } from "react-router-dom";

import Sensor from "./pages/data_sensor";

function MainPage() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <Sensor/>
    </div>
  );
}
  function App_sensor() {
    return (
        <>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
        </>
    );
  }

  export default App_sensor;