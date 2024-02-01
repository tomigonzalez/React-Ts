import * as Yup from "yup";

const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const regUser =
//   /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/;

export const validationSchema = Yup.object().shape({
  user: Yup.string()
    .min(3, "Minimo de caracteres: 3")
    // .matches(regUser, "El usuario no es valido")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .matches(regEmail, "El email no es válido")
    .required("El email es obligatorio"),
  msj: Yup.string()
    .min(18, "Minimo de caracteres: 18")
    .required("El mensaje es obligatorio"),
});
