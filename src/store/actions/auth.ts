
import { API_BASE_URL } from 'react-native-dotenv'
import { User } from '../../interfaces/user.interface';
import { createFormData } from '../../helpers/form-data';

export enum AuthActions {
  setAuthData = 'SET_AUTH_DATA',
  update = 'UPDATE',
  toggleLoading = 'TOGGLE_LOADING',
  updateFavorites = 'UPDATE_FAVORITES'
} 

export const signUp = ({ firstName, lastName, email, password }) => {
  return async dispatch => {
    try {
      dispatch({
        type: AuthActions.toggleLoading
      })
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
      if (response.ok) {
        data.user.password = password;
        dispatch({
          type: AuthActions.setAuthData,
          payload: data
        })
      } else {
        const error = new Error();
        error.message = data.error;
        throw error;
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch({
        type: AuthActions.toggleLoading
      })
    }
  }
}

export const login = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch({
        type: AuthActions.toggleLoading
      })
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
      if (response.ok) {
        data.user.password = password;
        dispatch({
          type: AuthActions.setAuthData,
          payload: data
        })
      } else {
        const error = new Error();
        error.message = data.error;
        throw error;
      }
    } catch (err) {
      throw err
    } finally {
      dispatch({
        type: AuthActions.toggleLoading
      })
    }
  }
}

export const update = (user: User, image: any) => {

  const body = createFormData({ body: user, image })

  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `${API_BASE_URL}/users/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
        body: body
      }
    )
    const data = await response.json();
    dispatch({
      type: AuthActions.update,
      payload: { ...data, password: user.password }
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: AuthActions.setAuthData,
      payload: {
        user: null,
        token: null
      }
    })
  }
}

export const updateFavorites = (val: number) => {
  return dispatch => {
    dispatch({
      type: AuthActions.updateFavorites,
      payload: val
    })
  }
}