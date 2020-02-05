
import { API_BASE_URL } from 'react-native-dotenv'

export enum AuthActions {
  login = 'LOGIN'
} 

export const signUp = ({ firstName, lastName, email, password }) => {
  return async dispatch => {
    const response = await fetch(
      `${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName
        })
      }
    )
    const data = await response.json();
    dispatch({
      type: AuthActions.login,
      payload: data
    })
  }
}

export const login = ({ email, password }) => {
  return async dispatch => {
    const response = await fetch(
      `${API_BASE_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    )
    const data = await response.json();
    dispatch({
      type: AuthActions.login,
      payload: data
    })
  }
}