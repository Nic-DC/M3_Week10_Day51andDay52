const initialState = {
  favorites: {
    favList: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_TO_FAVORITES`:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favList: [...state.favorites.favList, action.payload],
        },
      };

    case `DELETE_FAVORITE`:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favList: state.favorites.favList.filter((job) => job._id !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
