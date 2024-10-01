import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  HomePage,
  MainDashboard,
  Tasks,
  DasboardLayout,
  Clients,
  Calendar,
  Employees,
  Settings,
} from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" index element={<Home />}></Route>
        <Route path="" element={<DasboardLayout />}>
          <Route path="MainDashboard" element={<MainDashboard />} />
          <Route path="Tasks" element={<Tasks />} />
          <Route path="Clients" element={<Clients />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="Employees" element={<Employees />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
