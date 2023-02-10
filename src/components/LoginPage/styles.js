import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000000;
  padding: 95px 20px;
  color: white;

  h2:nth-child(1) {
    text-align: center;
    color: rgba(255, 87, 127, 1);
    font-weight: bold;
    font-size: 1.6rem;
  }
  h3:nth-child(1) {
    text-align: center;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33.6911px 17.6477px;
  gap: 17.65px;
  background: #212529;
  width: 90%;
  max-width: 369px;
  min-width: 296px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  height: 85%;
  max-height: 540px;

  div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  form {
    width: 100%;
    min-width: 280px;
    max-width: 324px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868e96;
  }
`;

export const Input = styled.input`
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  border-radius: 4px;
  height: 48px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #f8f9fa;
`;

export const Buton = styled.button`
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  height: 48px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;

export const LinkTeste = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  height: 44px;
  background: rgba(134, 142, 150, 1);
  border: 1.2182px solid rgba(134, 142, 150, 1);
  border-radius: 4.06066px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;
