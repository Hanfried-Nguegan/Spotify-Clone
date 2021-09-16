import { findAllDisplayValue } from "@testing-library/react";
export const initialState = {
  user: null,
  playist: [],
  playing: false,
  item: null,
  //Remove after finished developing...
  //token:
  //"BQBSANj3bWc1uXf7XqsOh13rs1hgU8wtdnIDOrSIhoa1TqBcFlveYmuG3kO2s21jGXIJvSsOs8hTJQjTp3Sdf0qZnWcB35prQVh-m11tlXkOUwhWy2cT80DhCGdtpLgyU0fGpBSFb071FD3Aeozg2ujhAsDObD4RuhQb53k",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};
export default reducer;
