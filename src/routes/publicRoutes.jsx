import { Navigate, Outlet } from "react-router-dom";

export function PublicRoutes() {
  const userToken = localStorage.getItem("authToken");

  return userToken ? <Navigate to="/dashboard" /> : <Outlet />;
}
