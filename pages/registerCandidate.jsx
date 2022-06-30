import Layout from "../src/components/Layout"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Text from "../src/components/Text"
import Link from "next/link"

const RegisterCandidate = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 place-items-center max-w-2xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
        <Text variant="login_register" size="xl">
          Create your
        </Text>
        <Text variant="login_register" size="xl">
          account
        </Text>
        <img src="/tinpro_logo.png" width="250" height="250" />
        <FormField name="username" type="text" placeholder=" ">
          Username
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
        <Link
          href={{
            pathname: `./candidate/01`,
          }}
        >
          <a>
            <Button variant="btnValidation" size="lg">
              Sign Up
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Text variant="link">go back</Text>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default RegisterCandidate
