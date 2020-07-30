import { gql } from "@apollo/client"

export const REGISTRATION_USER = gql`
  mutation signUp($input: UserInput!) {
    signUp(input: $input) {
      user
      id
    }
  }
`
export const AUTH_USER = gql`
  mutation signIn($input: UserInput!) {
    signIn(input: $input) {
      user
      id
      token
    }
  }
`

export const LOGOUT_USER = gql`
  mutation signOut($input: UserLogoutInput!) {
    signOut(input: $input) {
      success
    }
  }
`
export const GET_ALL_USERS = gql`
  query getAllUsersInfo {
    getAllUsersInfo {
      user
      status
      id
    }
  }
`

export const SUBSCRIPTION_USER_SIGNIN = gql`
  subscription signInUser {
    signInUser {
      user
      status
      id
    }
  }
`

export const SEND_MESSAGE_CHAT = gql`
  mutation sendMessage($input: sendMessageInput!) {
    sendMessage(input: $input) {
      idRecipient
    }
  }
`

export const GET_ALL_MESSAGES = gql`
  query getAllMessages($input: getMessageInput!) {
    getAllMessages(input: $input) {
      messages {
        time
        role
        message
      }
    }
  }
`

export const GET_MESSAGE_SUBSCRIBE = gql`
  subscription getMessagesSubscribe {
    getMessagesSubscribe {
      idRecipient
      messages {
        message
        role
        time
      }
    }
  }
`
