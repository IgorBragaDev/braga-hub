import { useForm } from "react-hook-form";
import { api } from "../../service";
import { LinkTeste } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { DivLogin, DivForm, Buton } from "./styles";
import { loginSchema } from "../../utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledLogo } from "../../components/Logo/styles";
import { Inputs } from "../../components/Input/input";

export function Home() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data) => {
    try {
      await api.post("/sessions", data).then((res) => {
        window.localStorage.clear();
        console.log(res.data.token);
        window.localStorage.setItem("authToken", res.data.token);
        window.localStorage.setItem("userId", res.data.user.id);

        navigate("/dashboard");
      });
      toast.success("Logado", { autoClose: 2000 });
    } catch (error) {
      toast.error("Algo deu errado", { autoClose: 2000 });
    }
  };
  return (
    <DivLogin>
      <header>
        <StyledLogo>Kenzie Hub</StyledLogo>
      </header>
      <DivForm>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          
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
