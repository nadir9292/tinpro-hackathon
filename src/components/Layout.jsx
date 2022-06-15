import Head from "next/head"
import NavBar from "./NavBar"

const Layout = (props) => {
  const { title, children, islogged, logout, id } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <NavBar
          title={title}
          islogged={islogged}
          logout={logout}
          id={id}
        ></NavBar>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
