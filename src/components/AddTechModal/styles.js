import Modal from "react-modal";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  width: 100%;
  max-width: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .modalTittle {
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 3.209px 3.209px 0px 0px;
    background: var(--Grey-2);

    button {
      background-color: transparent;
      border: none;
      color: var(--Grey-1);
      font-size: 19.835px;
      font-family: var(--base-font);
      font-weight: bolder;
      line-height: 20.856px;
    }

    h2 {
      color: var(--Grey-0);
      font-size: 14px;
      font-family: var(--base-font);
      font-weight: 700;
      line-height: 19.252px;
    }
  }

  .styledForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px 20px;
    border-radius: 3.209px;
    background-color: var(--Grey-3);
    box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px
      rgba(0, 0, 0, 0.25);
    label {
      color: var(--Grey-0);
      font-size: 11px;
      font-family: var(--base-font);
      line-height: 10px;
    }
    input,
    select {
      height: 38.504px;
      border-radius: 3.209px;
      border: 0.977px solid var(--Grey-0);
      background: var(--Grey-2);
      color: var(--Grey-0);
      font-size: 13.029px;
      font-family: var(--base-font);
      line-height: 21.173px;
    }

    button {
      height: 38.504px;
      border-radius: 4.061px;
      border: 1.218px solid var(--Color-primary);
      background: var(--Color-primary);
      color: #fff;
      font-size: 12.835px;
      font-family: var(--base-font);
      font-weight: 500;
      line-height: 21.173px;
    }
  }
`;
