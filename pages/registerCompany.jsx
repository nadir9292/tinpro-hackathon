import Layout from "../src/components/Layout"
import { Field, Formik } from "formik"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Text from "../src/components/Text"
import {
  usernameValidator,
  emailValidator,
  passwordValidator,
} from "../src/components/validators/validators"
import * as yup from "yup"
import { useCallback, useContext, useState } from "react"
import { makeClient } from "../src/services/makeClient"
import Popup from "../src/components/Popup"
import { AppContext } from "../src/components/AppContext"
import Link from "next/link"

const initialValues = {
  username: "",
  email: "",
  password: "",
  role: "USER",
}

const validationSchema = yup.object().shape({
  username: usernameValidator.required(),
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const RegisterCompany = () => {
  const [error, setError] = useState(null)
  const handleFormSubmit = useCallback(
    async ({ username, email, password, role }) => {
      setError(null)
      try {
        const { data } = await makeClient().post("/api/v1/auth/signup", {
          username,
          email,
          password,
          role,
        })
      } catch (err) {
        const { response: { data } = {} } = err
        if (data.error) {
          setError(data.error)
          return
        }
        setError("Oops, something went wrong.")
      }
    },
    []
  )

  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 place-items-center max-w-2xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Text variant="login_register" size="xl">
                Create your
              </Text>
              <Text variant="login_register" size="xl">
                account
              </Text>
              <img src="/tinpro_logo.png" width="250" height="250" />
              <FormField name="name" type="text" placeholder=" ">
                Company's name
              </FormField>
              <FormField name="email" type="email" placeholder=" ">
                E-mail
              </FormField>
              <FormField name="password" type="password" placeholder=" ">
                Password
              </FormField>
              <Text variant="info" sizes="sm">
                You already have an account?&nbsp;
                <Link href="/login">
                  <a>
                    <Text variant="link">Sign in</Text>
                  </a>
                </Link>
              </Text>
              <Button
                type="submit"
                onClick={() => setButtonPopup(true)}
                disabled={isSubmitting || !isValid}
                variant="btnValidation"
                size="lg"
              >
                Sign Up
              </Button>
              <Popup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
                variant="login_success"
              >
                <Text variant="popup">
                  if you don't have an account, we will send you an email.
                </Text>
              </Popup>
              <Link href="/">
                <a>
                  <Text variant="link">go back</Text>
                </a>
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default RegisterCompany
