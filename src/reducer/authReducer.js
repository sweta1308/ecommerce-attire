export const authReducer = (state, action) => {
  switch (action.type) {
    case "set_login":
      return { ...state, isLoggedIn: action.payload };
    case "set_user":
      return { ...state, user: action.payload };
    case "set_token":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
