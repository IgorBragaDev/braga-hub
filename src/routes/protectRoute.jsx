import { Navigate, Outlet } from "react-router-dom";


export function ProtectRoute(){
    const userToken = localStorage.getItem("authToken");
    return(
        userToken ? <Outlet/> : <Navigate  to="/"/>
    )
}