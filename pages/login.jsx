import Layout from "../src/components/Layout"
import { Formik } from "formik"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Text from "../src/components/Text"
import {
  usernameValidator,
  passwordValidator,
} from "../src/components/validators/validators"
import * as yup from "yup"
import { useCallback, useContext, useState } from "react"
import Link from "next/link"
import { makeClient } from "../src/services/makeClient"
import { AppContext } from "../src/components/AppContext"
import { useRouter } from "next/router"
import Popup from "../src/components/Popup"

const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: usernameValidator.required(),
  password: passwordValidator.required(),
})

const Login = () => {
  const router = useRouter()

  const redirect = () => {
    router.reload()
  }

  const { jwt, logout } = useContext(AppContext)

  const [error, setError] = useState(null)

  const { savejwt } = useContext(AppContext)

  const [buttonPopup, setButtonPopup] = useState(false)

  const handleFormSubmit = useCallback(async ({ username, password }) => {
    setError(null)
    try {
      const {
        data: { jwt, id },
      } = await makeClient().post("/api/v1/auth/signin", { username, password })

      if (!jwt) {
        throw new Error("Missing jwt.")
      }

      redirect()
      savejwt(jwt, id)
    } catch (err) {
      const { response: { data } = {} } = err
      if (data.error) {
        setError(data.error)
        return
      }
      setError("Oops, something went wrong.")
    }
  }, [])

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
                  Welcome
                </Text>
                <FormField name="username" type="text">
                  Username
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

export default Login
