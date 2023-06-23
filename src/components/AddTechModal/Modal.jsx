import { useContext } from "react";
import { TechContext } from "../../providers/techProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { techSchema } from "../../utils/techSchema";
import { StyledModal } from "./styles";

export function ModalTech() {
  const bg = {
    overlay: {
      background: "#00000065",
    },
  };
  const { modalIsOpen, closeModal, onSubimitTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(techSchema) });

  return (
    <div>
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalStyles"
        style={bg}
      >
        <div className="modalTittle">
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={closeModal}>x</button>
        </div>
        <form onSubmit={handleSubmit(onSubimitTech)} className="styledForm">
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            id="title"
            {...register("title")}
            error={errors.name?.message}
          />
          <label htmlFor="status">Selecionar Status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="">Escolha um nivel</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit"> Cadastrar Tecnolgia </button>
        </form>
      </StyledModal>
    </div>
  );
}
