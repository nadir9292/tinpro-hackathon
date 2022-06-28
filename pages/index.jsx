import Button from "../src/components/Button"
import Layout from "../src/components/Layout"
import Text from "../src/components/Text"
import Link from "next/link"

const Index = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="relative w-11/12 sm:w-8/12 md:w-9/12  pt-10 pb-8 rounded">
          <div className="flex flex-col items-center px-5">
            <img src="/tinpro_logo.png" />
            <Text variant="Choice_Side" size="lg">
              Candidate :
            </Text>
            <Link href="/registerCandidate">
              <a>
                <Button variant="btnValidation" size="lg">
                  Go to Candidate register
                </Button>
              </a>
            </Link>
            <Text variant="Choice_Side" size="lg">
              Company :
            </Text>
            <Link href="/registerCompany">
              <a>
                <Button variant="btnValidation" size="lg">
                  Go to Company register
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
