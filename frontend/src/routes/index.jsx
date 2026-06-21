import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import CancelAppointment from "../components/CancelForm";
import UpdatedForm from "../components/UpdatedForm";
import RememberForm from "../components/RememberForm";

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/appointment" element={<Schedule />} />
      <Route path="/cancel" element={<CancelAppointment />} />
      <Route path="/reschedule" element={<UpdatedForm />} />
      <Route path="/remember" element={<RememberForm />} />
    </Routes>
  );
}

export default RouterApp;
