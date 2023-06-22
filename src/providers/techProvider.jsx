import { createContext } from "react";
import { api } from "../service";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const [dados, setDados] = useState({});
  const userLogado = async () => {
    try {
      await api
        .get("/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((res) => {
          console.log(res.data.techs);
          setDados(res.data);
        });
    } catch (error) {
      navigate("/");
    }
  };
  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <TechContext.Provider value={{ dados, userLogado, logout }}>
      {children}
    </TechContext.Provider>
  );
};
