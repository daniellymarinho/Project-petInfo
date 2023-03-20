import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/register";
import { LoginPage } from "../pages/login";
import { DashboardPage } from "../pages/dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />}></Route>
    </Routes>
  );
};
