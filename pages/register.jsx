import Layout from "../src/components/Layout"
import { Formik } from "formik"
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

const initialValues = {
  username: "",
  email: "",
  password: "",
  role: [],
  roles: [],
}

const validationSchema = yup.object().shape({
  username: usernameValidator.required(),
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const Register = () => {
  const { jwt, logout } = useContext(AppContext)
  const [error, setError] = useState(null)
  const handleFormSubmit = useCallback(
    async ({ username, email, password, role, roles }) => {
      setError(null)
      try {
        const { data } = await makeClient().post("/api/v1/auth/signup", {
          username,
          email,
          password,
          role,
          roles,
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
    <Layout title="Kingdhome" islogged={!jwt} logout={logout}>
      <div className="flex justify-center m-10">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-200 shadow-lg rounded p-10 mb-4 items-center shadow-xl"
            >
              <div className="flex flex-col">
                <Text variant="login_register" size="xl">
                  Create your account
                </Text>
                <FormField name="username" type="text">
                  Username
                </FormField>
                <FormField name="email" type="email">
                  E-mail
                </FormField>
                <FormField name="password" type="password">
                  Password
                </FormField>
                <Button
                  type="submit"
                  onClick={() => setButtonPopup(true)}
                  disabled={isSubmitting || !isValid}
                  variant="btnValidation"
                  size="lg"
                >
                  Sign Up
                </Button>
              </div>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Text variant="popup">
                  if you don't have an account, we will send you an email.
                </Text>
              </Popup>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Register
