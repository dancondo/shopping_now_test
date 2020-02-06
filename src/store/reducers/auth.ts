import { AuthActions } from "../actions/auth";

const initialState = {
  token: null,
  user: null,
  loading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.setAuthData:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    case AuthActions.update:
      return {
        ...state,
        user: action.payload
      }
    case AuthActions.toggleLoading:
      return {
        ...state,
        loading: !state.loading
      }
    default:
      return state;
  }
}