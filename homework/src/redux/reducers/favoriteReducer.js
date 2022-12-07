import { ADD_TO_FAVORITES, DELETE_FAVORITE } from "../actions";

const initialState = {
  favList: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favList: [...state.favList, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        favList: [...state.favList.filter((job) => job._id !== action.payload)],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
