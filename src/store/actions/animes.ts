import { API_BASE_URL } from 'react-native-dotenv'

export enum AnimesActions {
  fetchAnimes = 'FETCH_ANIMES',
  toggleLoading = 'TOGGLE_LOADING',
  setFavorite = 'SET_FAVORITE'
}

export const fetchAnimes = (query: string) => {
  return async (dispatch, getState) => {
    dispatch({
      type: AnimesActions.toggleLoading,
      payload: true
    })
    const token = getState().auth.token;
    const response = await fetch(
      `${API_BASE_URL}/animes?q=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
    const data = await response.json();
    dispatch({
      type: AnimesActions.fetchAnimes,
      payload: data
    })
    dispatch({
      type: AnimesActions.toggleLoading,
      payload: false
    })
  }
}
export const markAsFavorite = (animeId: string) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await fetch(
      `${API_BASE_URL}/animes/favorites`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          animeId
        })
      }
    )
    dispatch({
      type: AnimesActions.setFavorite,
      payload: animeId
    })
  }
}