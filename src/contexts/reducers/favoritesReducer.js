import { ADD_MOVIE, REMOVE_MOVIE, ADD_SERIE, REMOVE_SERIE, SYNC_FAVORITES } from "./favoritesTypes";

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      console.log({ ...state, moviesId: [...state.moviesId, action.payload] });
      return { ...state, moviesId: [...state.moviesId, action.payload] };
    case REMOVE_MOVIE:
      console.log({ ...state, moviesId: state.moviesId.filter((id) => id !== action.payload) });
      return { ...state, moviesId: state.moviesId.filter((id) => id !== action.payload) };
    case ADD_SERIE:
      console.log({ ...state, seriesId: [...state.seriesId, action.payload] });
      return { ...state, seriesId: [...state.seriesId, action.payload] };
    case REMOVE_SERIE:
      console.log({ ...state, seriesId: state.seriesId.filter((id) => id !== action.payload) });
      return { ...state, seriesId: state.seriesId.filter((id) => id !== action.payload) };
    case SYNC_FAVORITES:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
