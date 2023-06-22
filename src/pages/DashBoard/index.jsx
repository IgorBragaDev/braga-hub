import { useState, useEffect, useContext } from "react";
import { api } from "../../service";
import { DivHeader, DashContainer, DivBody } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { TechContext } from "../../providers/techProvider";

export function DashBoard() {
  const { userLogado, dados, logout } = useContext(TechContext);

  useEffect(() => {
    userLogado();
  }, []);

  return (
    <DashContainer>
      <div className="pageContainer">
        <div>
          <header>
            <DivHeader>
              <h2>Kenzie hub </h2>
              <button onClick={logout}>Sair</button>
            </DivHeader>
          </header>
        </div>

        <DivBody>
          <h2>{`Olá, ${dados.name}`}</h2>
          <p>{dados.course_module}</p>
        </DivBody>

        <div className="informContainer">
          <h3> Tecnologias </h3>

          <button>adcionar</button>
        </div>

        <div></div>
      </div>
    </DashContainer>
  );
}
