import { useForm } from "react-hook-form";
import { api } from "../../service";
import { LinkTeste } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { DivLogin, DivForm, Input, Buton } from "./styles";

export function LoginPage() {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup.string().required("nome Obrigatorio"),
    password: yup.string().required("senha obrigatoria"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = async (data) => {
    try {
      await api.post("/sessions", data).then((res) => {
        window.localStorage.clear();
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
        <h2>Kenzie Hub</h2>
      </header>
      <DivForm>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <Input type="text" id="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            <p>{errors.password?.message}</p>
          </div>
          <Buton type="submit">Entrar</Buton>
        </form>

        <p>Ainda nao possui conta?</p>
        <LinkTeste to="/register">Cadastra-se</LinkTeste>
      </DivForm>
    </DivLogin>
  );
}
