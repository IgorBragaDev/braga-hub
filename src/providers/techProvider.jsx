import { createContext } from "react";
import { api } from "../service";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
          
          setUserData(res.data);
          
        });
    } catch (error) {
      navigate("/");
    }
  };
  function logout() {
    localStorage.clear();
    navigate("/");
  }
  const onSubimitTech = async (data) => {
    
    try {
      await api.post("/users/techs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(data);
      closeModal()
    } catch (error) {}
  };

  return (
    <TechContext.Provider
      value={{
        userData,
        userLogado,
        logout,
        openModal,
        modalIsOpen,
        closeModal,
        onSubimitTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
