import { createContext } from "react";
import { api } from "../service";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [idTech, setIdTech] = useState("");
  const [techNames, setTechNames] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(userToken)
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
      // navigate("/");
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
      userLogado();
      closeModal();
    } catch (error) {}
  };

  function editModal(techId, techName) {
    setIdTech(techId);
    setTechNames(techName);
  }

  const [modaEditlIsOpen, setModaEditlIsOpen] = useState(false);

  const openEditModal = () => {
    setModaEditlIsOpen(true);
  };

  const closeEditModal = () => {
    setModaEditlIsOpen(false);
  };
  const onEditTech = async (data) => {
    try {
      await api.put(`/users/techs/${idTech} `, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      userLogado();
      closeEditModal();
    } catch (error) {
      console.log(error);
    }
  };

  const onExcludeTech = async () => {
    try {
      await api.delete(`/users/techs/${idTech} `, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      userLogado();
      closeEditModal();
    } catch (error) {
     
    }
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
        modaEditlIsOpen,
        openEditModal,
        closeEditModal,
        onEditTech,
        editModal,
        techNames,
        onExcludeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
