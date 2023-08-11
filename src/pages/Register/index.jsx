import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DivRegister,
  DivFormRegister,
  SelectRegister,
  ButonRegister,
  DivDeGap,
  DivHeader,
  HeaderButton,
} from "./styles";
import { Logo } from "../../components/Logo/logo";
import { Inputs } from "../../components/Input/input";
import { useContext } from "react";
import { UserContext } from "../../providers/userprovider";

export function RegisterPage() {
  const { onSubmitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  console.log(register.value);
  return (
    <DivRegister>
      <header>
        <DivHeader>
          <Logo />
          <HeaderButton to="/">Voltar</HeaderButton>
        </DivHeader>
      </header>
      <DivFormRegister>
        <div>
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis,vamos nessa</p>
        </div>

        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <Inputs
            id={"name"}
            label={"Nome"}
            type={"text"}
            handle={register("name")}
            error={errors.name?.message}
          />

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

          <Inputs
            id={"checkpassword"}
            label={"Confirme sua senha"}
            type={"password"}
            handle={register("checkpassword")}
            error={errors.checkpassword?.message}
          />
          <DivDeGap>
            <Inputs
              id={"bio"}
              label={"Bio"}
              type={"text"}
              handle={register("bio")}
              error={errors.bio?.message}
            />

            <Inputs
              id={"contato"}
              label={"Contato"}
              type={"text"}
              handle={register("contact")}
              error={errors.contact?.message}
              
            />
            <div>
              <label htmlFor="nivel">Selecionar módulo</label>
              <SelectRegister
                name="nivel"
                id="nivel"
                {...register("course_module")}
              >
                <option value=""> Escolha um nivel</option>
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
              <p>{errors.course_module?.message}</p>
            </div>
            <ButonRegister>Cadastrar</ButonRegister>
          </DivDeGap>
        </form>
      </DivFormRegister>
    </DivRegister>
  );
}
