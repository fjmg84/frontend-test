import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../components/Login.jsx";
import ListUser from "../components/Room/ListUser";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="room" element={<ListUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
