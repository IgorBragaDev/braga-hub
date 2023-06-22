import { StyledDivInputs } from "./styles";

export function Inputs({ id, label, type, handle, error }) {
  return (
    <StyledDivInputs>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...handle} />
      <p>{error}</p>
    </StyledDivInputs>
  );
}
