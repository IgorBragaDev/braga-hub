import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000000;
  padding: 25px 20px;
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
export const DivFormRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33.6911px 17.6477px;
  background: #212529;
  width: 90%;
  max-width: 369px;
  min-width: 296px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  height: 100%;
  max-height: 740px;

  div {
    display: flex;
    flex-direction: column;
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

export const InputRegister = styled.input`
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  border-radius: 4px;
  height: 30px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #f8f9fa;
`;
export const SelectRegister = styled.select`
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  border-radius: 4px;
  height: 30px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #f8f9fa;
`;

export const ButonRegister = styled.button`
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

export const DivDeGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 160px;
`;
export const HeaderButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 79.54px;
  height: 31.95px;
  background: #212529;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 9.59437px;
  line-height: 23px;
  text-align: center;
  color: #f8f9fa;
`;
