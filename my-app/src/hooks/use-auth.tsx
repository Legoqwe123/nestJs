import { useState } from "react"
import Cookies from "js-cookie"

type AuthHooks = {
  storage: AuthState
  login: (token: string, id: string) => void
  logout: () => void
}

type AuthState = {
  token: string | undefined
  userId: string | undefined
}

export const useAuth = (): AuthHooks => {
  const [storage, setStorage] = useState<AuthState>({
    token: Cookies.get("token"),
    userId: Cookies.get("userId"),
  })

  const login = (token: string, id: string): void => {
    Cookies.set("token", token)

    Cookies.set("userId", id)

    setStorage({ ...storage, token, userId: id })
  }

  const logout = (): void => {
    Cookies.remove("token")

    Cookies.remove("userId")

    setStorage({ token: "", userId: "" })
  }

  return { storage, login, logout }
}
