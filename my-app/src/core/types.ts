export type handleInput = {
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

export type handleForm = {
  (event: React.MouseEvent<HTMLButtonElement>): void
}

export interface UserInfo {
  id: string
  status: string
  active: boolean
  user: string
}

export interface User {
  id: string
  user: string
}

export interface SignUpUser {
  password: string
  user: string
}

export type AllUsersInfo = {
  getAllUsersInfo: [UserInfo]
}

export type SignInUser = {
  signInUser: [UserInfo]
}
