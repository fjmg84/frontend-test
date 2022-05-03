import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../components/Login.jsx";
import Room from "../components/Room/Room";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="room" element={<Room />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
