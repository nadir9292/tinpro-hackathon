import { createContext, useCallback, useState } from "react"

const initialjwt =
  typeof window === "undefined" ? null : localStorage.getItem("session_jwt")

const initialId =
  typeof window === "undefined" ? null : localStorage.getItem("id")

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [jwt, setjwt] = useState(initialjwt)
  const [id, setId] = useState(initialId)

  const savejwt = useCallback((jwt, id) => {
    localStorage.setItem("session_jwt", jwt)
    localStorage.setItem("id", id)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("session_jwt")
    localStorage.removeItem("id")
    setjwt(null)
    setId(null)
  })

  return (
    <AppContext.Provider
      {...props}
      value={{ savejwt, setId, logout, jwt, id }}
    />
  )
}

export default AppContextProvider
