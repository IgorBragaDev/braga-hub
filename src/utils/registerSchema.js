import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "O e-mail é obrigatório").email("E-mail invalido"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(\W|_)/, "É necessário ao menos um caractere especcial")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),

    checkpassword: z.string().nonempty(),

    bio: z.string().nonempty("Nao pode ser vazio "),

    contact: z.string().nonempty("Nao pode ser vazio "),

    course_module: z.string().nonempty("Nâo pode ser vazio"),
  })
  .refine((value) => value.password === value.checkpassword, {
    message: "As senhas precisam ser iguais",
    path: ["checkpassword"],
  });
