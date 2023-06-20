import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: var(--Grey-4);
  padding: 25px 20px;
  color: white;
  font-family: var(--base-font);

  h2:nth-child(1) {
    text-align: center;
    color: var(--Color-primary);
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
  background: var(--Grey-3);
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
    
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--Grey-1);
  }
`;

export const InputRegister = styled.input`
  background: #343b41;
  border: 1.2182px solid var(--Grey-2);
  border-radius: 4px;
  height: 30px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: var(--Grey-1);
`;
export const SelectRegister = styled.select`
  background: #343b41;
  border: 1.2182px solid var(--Grey-2);
  border-radius: 4px;
  height: 30px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: var(--Grey-1);
`;

export const ButonRegister = styled.button`
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 100%;
  min-width: 280px;
  max-width: 324px;
  height: 48px;
  background: var(--Color-primary);
  border: 1.2182px solid var(--Color-primary);
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
  background: var(--Grey-3);
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 9.59437px;
  line-height: 23px;
  text-align: center;
  color: var(--Grey-0);
`;
