
import { useForm } from "react-hook-form";
import { api } from "../../service";
import { ToastContainer, toast } from "react-toastify";
import { registerSchema } from "../../utils/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import {
  DivRegister,
  DivFormRegister,
  InputRegister,
  SelectRegister,
  ButonRegister,
  DivDeGap,
  DivHeader,
  HeaderButton,
} from "./styles";


export function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data) => {
    try {
      await api.post("/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("A conta foi criada", { autoClose: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Deu erro", { autoClose: 2000 });
    }
  };

  return (
    <DivRegister>
      <header>
        <DivHeader>
          <h2>Kenzie Hub </h2>
          <HeaderButton to="/">Voltar</HeaderButton>
        </DivHeader>
      </header>
      <DivFormRegister>
        <div>
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis,vamos nessa</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Nome</label>
            <InputRegister
              type="text"
              name="name"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <InputRegister
              type="text"
              name="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <InputRegister
              type="password"
              name="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div>
            <label htmlFor="checkpasssword">Confirme sua senha </label>
            <InputRegister
              type="password"
              name="checkpassword"
              id="checkpassword"
              placeholder="Confirme sua senha"
              {...register("checkpassword")}
            />
            <p>{errors.checkpassword?.message}</p>
          </div>
          <DivDeGap>
            <div>
              <label htmlFor="bio">Bio</label>
              <InputRegister
                type="text"
                name="bio"
                id="bio "
                placeholder="Fale sobre você"
                {...register("bio")}
              />
            </div>
            <div>
              <label htmlFor="contato">Contato</label>
              <InputRegister
                type="text"
                name="contato"
                id="contato"
                placeholder="Opçao de contato"
                {...register("contact")}
              />
            </div>
            <div>
              <label htmlFor="nivel">Selecionar módulo</label>
              <SelectRegister name="nivel" id="" {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo (Frontend Avançado)
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo (Backend Avançado)
                </option>
              </SelectRegister>
            </div>
            <ButonRegister>Cadastrar</ButonRegister>
          </DivDeGap>
        </form>
      </DivFormRegister>
    </DivRegister>
  );
}
