import { useContext } from "react"
import { AppContext } from "../../src/components/AppContext"
import Layout from "../../src/components/Layout"
import Text from "../../src/components/Text"
import useApi from "../../src/components/useApi"

const User = () => {
  const { jwt, logout, id } = useContext(AppContext)
  const detailsUser = useApi([], "get", `/api/v1/user/find/${id}`)

  return (
    <Layout title="Kingdhome" islogged={!jwt} logout={logout} id={id}>
      <Text>{detailsUser.username}</Text>
      <Text>{detailsUser.id}</Text>
    </Layout>
  )
}

export default User
