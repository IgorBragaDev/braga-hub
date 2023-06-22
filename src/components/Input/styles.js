import styled from "styled-components";

export const StyledDivInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
    color: var(--Grey-1);

  }
  input {
    background: var(--Grey-2);
    border: 1.2182px solid var(--Grey-0);
    border-radius: 4px;
    height: 48px;
    width: 100%;
    min-width: 280px;
    max-width: 324px;
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--Grey-0);
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--Grey-1);
  }
`;
