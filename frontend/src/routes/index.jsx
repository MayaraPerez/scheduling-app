import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import Reschedule from "../pages/Reschedule";
import Remember from "../pages/Remember";
import Cancel from "../pages/Cancel";

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment" element={<Schedule />} />
      <Route path="/reschedule" element={<Reschedule />} />
      <Route path="/remember" element={<Remember />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
}

export default RouterApp;
