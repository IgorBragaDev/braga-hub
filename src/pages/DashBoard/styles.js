import styled from "styled-components";

export const DashContainer = styled.div`
  background-color: var(--Grey-4);
  

  .informContainer {
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;

    button {
      background-color: transparent;
      border: none;
    }

    h3 {
      font-family: var(--base-font);
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--Grey-0);
    }
    p {
      font-family: var(--base-font);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--Grey-0);
    }
  }

  .pageContainer {
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
  }

  .techContainer {
    padding: 16px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 16px;
      background-color: var(--Grey-3);
    }

    li {
      height: 49px;
      padding: 16px 20px;
      font-family: var(--base-font);
      color: var(--Grey-0);
      display: flex;
      justify-content: space-between;
      border-radius: 4px;
      background: #121214;

      h3 {
        font-size: 14.212px;
        font-weight: 700;
        line-height: 24.364px;
      }
      p {
        color: var(--Grey-1);
        text-align: right;
        font-size: 12.182px;
        line-height: 22.334px;
      }
    }
  }
`;

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  h2 {
    color: rgba(255, 87, 127, 1);
  }
  button {
    width: 55.49px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    border: 1px solid #212529;
    font-family: var(--base-font);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: var(--Grey-0);
  }
`;

export const DivBody = styled.div`
  h2 {
    padding: 13px 20px;
    font-family: var(--base-font);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--Grey-0);
  }

  p {
    font-family: var(--base-font);
    padding: 16px 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--Grey-1);
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
