import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { DashBoard } from "../pages/DashBoard";
import { useEffect, useState } from "react";
import { ProtectRoute } from "./protectRoute";
import { PublicRoutes } from "./publicRoutes";
export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes/>}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/dashboard" element={<ProtectRoute />}>
        <Route index element={<DashBoard />} />
      </Route>
    </Routes>
  );
}
