import { ADD_MOVIE, REMOVE_MOVIE, ADD_SERIE, REMOVE_SERIE, SYNC_FAVORITES } from "./favoritesTypes";

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, moviesId: [...state.moviesId, action.payload] };
    case REMOVE_MOVIE:
      return { ...state, moviesId: state.moviesId.filter((id) => id !== action.payload) };
    case ADD_SERIE:
      return { ...state, seriesId: [...state.seriesId, action.payload] };
    case REMOVE_SERIE:
      return { ...state, seriesId: state.seriesId.filter((id) => id !== action.payload) };
    case SYNC_FAVORITES:
      return action.payload;
    default:
      return state;
  }
};
