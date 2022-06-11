import * as yup from "yup"

export const usernameValidator = yup
  .string()
  .min(3)
  .max(20)
  .matches(/^[a-zA-Z0-9 ]+$/, "special characters are not allowed")
  .label("username")

export const emailValidator = yup.string().min(3).max(50).email().label("email")

export const passwordValidator = yup.string().min(3).max(50).label("Password")

export const titleValidator = yup.string().min(3).max(50).label("title")

export const contentValidator = yup.string().min(3).max(1000).label("content")
