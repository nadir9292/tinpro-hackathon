import { useContext } from "react"
import { AppContext } from "../src/components/AppContext"
import Layout from "../src/components/Layout"
import useApi from "../src/components/useApi"
import Text from "../src/components/Text"
import Button from "../src/components/Button"

const ShoppingCart = () => {
  const { jwt, logout, id } = useContext(AppContext)
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
  const shoppingCart = useApi(
    [],
    "get",
    "/api/v1/shoppingCart/findByUsername/vasco"
  )

  return (
    <Layout isShow title="Kingdhome" islogged={!jwt} logout={logout} id={id}>
      <div className=" w-full">
        <div className="bg-zinc-200 px-4 md:px-5 pb-5 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              {shoppingCart.articles.map(
                ({ id, price, name, description, pictures }, index) => (
                  <tr
                    key={index}
                    className="text-sm leading-none text-gray-600 h-16"
                  >
                    <td>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                          <img
                            src={pictures[0]}
                            alt={pictures[0]}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full "
                          />
                        </div>
                        <div className="pl-2">
                          <Text variant="card_name" size="lg">
                            {id}
                          </Text>
                          <Text variant="card_description" size="lg">
                            {id}
                          </Text>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Text>{id}$</Text>
                    </td>
                    <td>
                      <select
                        name="quantity"
                        className=" border border-gray-300 ml-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option defaultValue="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                    <td>
                      <Button variant="btnDelete" size="md">
                        <Text variant="nav_bar_text" size="md">
                          DELETE
                        </Text>
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default ShoppingCart
