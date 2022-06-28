import Head from "next/head"

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Head>
        <title>TINRPO</title>
      </Head>
      <header></header>
      <main>{children}</main>
    </>
  )
}

export default Layout
