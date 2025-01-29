import { useState, useEffect, useContext } from "react";
import { api } from "../../service";
import { DivHeader, DashContainer, DivBody } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { TechContext } from "../../providers/techProvider";
import { ModalTech } from "../../components/AddTechModal/Modal";
import { ModalEditTech } from "../../components/EditTechModal/ModalEdit";
import buttonPlus from "../../assets/button.png";

export function DashBoard() {
  const { userLogado, userData, logout, openModal, editModal, openEditModal } =
    useContext(TechContext);

  useEffect(() => {
    userLogado();
  }, []);
  function openModalTech() {
    openModal();
  }
  function openEditModaltech() {
    openEditModal();
  }

  return (
    <DashContainer>
      <div className="pageContainer">
        <div>
          <header>
            <DivHeader>
              <h2>Braga hub </h2>
              <button onClick={logout}>Sair</button>
            </DivHeader>
          </header>
        </div>

        <DivBody>
          <h2>{`Olá, ${userData.name}`}</h2>
          <p>{userData.course_module}</p>
        </DivBody>

        <div className="informContainer">
          <h3> Tecnologias </h3>
          <button onClick={openModalTech}>
            <img src={buttonPlus}></img>
          </button>
        </div>
        <ModalTech />
        <ModalEditTech />
        <div className="techContainer">
          <ul>
            {userData.techs &&
              userData.techs.map((tech) => (
                <li
                  key={tech.id}
                  onClick={() => {
                    editModal(tech.id, tech.title);
                    openEditModaltech();
                  }}
                >
                  <h3>{tech.title}</h3>
                  <p>{tech.status}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </DashContainer>
  );
}
