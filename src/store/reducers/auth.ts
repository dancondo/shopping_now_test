import { AuthActions } from "../actions/auth";

const initialState = {
  token: null,
  user: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.login:
      return {
        token: action.payload.token,
        user: action.payload.user
      }
    case AuthActions.update:
        return {
          user: action.payload
        }
      default:
        return state;
  }
}