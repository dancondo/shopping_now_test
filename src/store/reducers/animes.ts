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
    case AnimesActions.setFavorite:
      const animes = state.animes.map(anime => {
        if (anime.id == action.payload) {
          anime.favorite = !anime.favorite
        }
        return anime
      })
      return {
        loading: state.loading,
        animes: animes
      }
    default:
      return state;
  }
}