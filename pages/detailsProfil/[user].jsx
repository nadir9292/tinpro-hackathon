import { useContext } from "react"
import { AppContext } from "../../src/components/AppContext"
import Layout from "../../src/components/Layout"
import Text from "../../src/components/Text"
import useApi from "../../src/components/useApi"

// /!\ WARNING : this has been coded by Avetis 🤣💀💀
export const getServerSideProps = async (context) => {
  return {
    props: {
      query: context.query,
    },
  }
}

const User = ({ query }) => {
  const { jwt, logout, id } = useContext(AppContext)
  const detailsUser = useApi([], "get", `/api/v1/user/find/${query.user}`)

  return (
    <Layout title="Kingdhome" islogged={!jwt} logout={logout} id={id}>
      <Text>{detailsUser.username}</Text>
      <Text>{detailsUser.id}</Text>
    </Layout>
  )
}

export default User
