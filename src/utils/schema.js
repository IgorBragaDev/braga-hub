import * as yup from "yup";
 
 export const formSchema = yup
    .object()
    .shape({
      name: yup.string().required("nome Obrigatorio"),
      email: yup.string().required("Email obrigatório").email("Email invalido"),
      password: yup
        .string()
        .required("senha obrigatoria")
        .matches(/(\d)/, "Deve conter ao menos um numero")
        .matches(/([a-z])/, "Deve conter uma letra 1 miniscula")
        .matches(/([A-Z])/, "Deve conter uma letra 1 maiscula")
        .matches(/(\W|_)/, "Deve conter um caracter especial")
        .matches(/.{8,}/, "Deve conter no minimo 8 caracteres"),
      checkpassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
    })
    .required();