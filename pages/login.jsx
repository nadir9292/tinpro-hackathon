import Layout from "../src/components/Layout"
import { Formik } from "formik"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Text from "../src/components/Text"
import {
  emailValidator,
  passwordValidator,
} from "../src/components/validators/validators"
import * as yup from "yup"
import { useCallback, useState } from "react"
import { makeClient } from "../src/services/makeClient"
import Popup from "../src/components/Popup"
import Link from "next/link"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const Login = () => {
  const [error, setError] = useState(null)

  const [buttonPopup, setButtonPopup] = useState(false)

  const handleFormSubmit = useCallback(async ({ email, password }) => {
    setError(null)
    try {
      const {
        data: { jwt, id, email: pseudo },
      } = await makeClient().post("/api/v1/auth/signin", { email, password })

      if (!jwt) {
        throw new Error("Missing jwt.")
      }
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
                Welcome
              </Text>
              <img src="/tinpro_logo.png" width="250" height="250" />
              <FormField name="email" type="email" placeholder=" ">
                e-Mail
              </FormField>
              <FormField name="password" type="password" placeholder=" ">
                Password
              </FormField>

              <Button
                type="submit"
                onClick={() => setButtonPopup(true)}
                disabled={isSubmitting || !isValid}
                variant="btnValidation"
                size="lg"
              >
                Sign in
              </Button>
              {!error ? (
                <Popup
                  variant="login_success"
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                >
                  <Text variant="popup">Welcome 😊</Text>
                </Popup>
              ) : (
                <Popup
                  variant="login_error"
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                >
                  <Text variant="popup">Bad credential 💀</Text>
                </Popup>
              )}
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

export default Login
