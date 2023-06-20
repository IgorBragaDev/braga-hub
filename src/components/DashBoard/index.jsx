import { useState, useEffect } from "react";
import { api } from "../../service";
import { DivHeader, DashContainer, DivBody } from "./style";
import { Link, useNavigate } from "react-router-dom";

export function Dash() {
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
          setDados(res.data);
        });
    } catch (error) {}
  };

  useEffect(() => {
    userLogado();
  }, []);
  function sair() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <DashContainer>
      <div className="pageContainer">
        <div>
          <header>
            <DivHeader>
              <h2>Kenzie hub </h2>
              <button onClick={sair}>Sair</button>
            </DivHeader>
          </header>
        </div>

        <DivBody>
          <h2>{`Olá, ${dados.name}`}</h2>
          <p>{dados.course_module}</p>
        </DivBody>

        <div className="informContainer">
          <h3>Que pena ! Estamos em desenvolvimento :( </h3>
          <p>
            Nossa aplicação esta em desenvolvimento em breve teremos novidades
          </p>
        </div>
      </div>
    </DashContainer>
  );
}
