import { AnimesActions } from "../actions/animes";

const initialState = {
  animes: null,
  loading: false
};

export const animesReducer = (state = initialState, action) => {
  switch (action.type) {
    case AnimesActions.fetchAnimes:
      return {
        animes: action.payload,
        loading: state.loading
      }
    case AnimesActions.toggleLoading:
      return {
        loading: action.payload,
        animes: state.animes
      }
      default:
        return state;
  }
}