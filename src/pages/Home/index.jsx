import { useForm } from "react-hook-form";
import { DivLogin, DivForm, Buton, LinkTeste } from "./styles";
import { loginSchema } from "../../utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledLogo } from "../../components/Logo/styles";
import { Inputs } from "../../components/Input/input";
import { UserContext } from "../../providers/userprovider";
import { useContext, useEffect } from "react";

export function Home() {
  const { onSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  return (
    <DivLogin>
      <header>
        <StyledLogo>Braga Hub</StyledLogo>
      </header>
      <DivForm>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <Inputs
            id={"email"}
            label={"Email"}
            type={"text"}
            handle={register("email")}
            error={errors.email?.message}
          />

          <Inputs
            id={"password"}
            label={"Senha"}
            type={"password"}
            handle={register("password")}
            error={errors.password?.message}
          />

          <Buton type="submit">Entrar</Buton>
        </form>

        <p>Ainda nao possui conta?</p>
        <LinkTeste to="/register">Cadastra-se</LinkTeste>
      </DivForm>
    </DivLogin>
  );
}
