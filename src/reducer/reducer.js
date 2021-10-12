const initialState = {
  user: [
    { user: "신수민성", id: "love", password: "kids", email: "love@gmail.com" },
    { user: "주아", id: "like", password: "kids2", email: "love@dgsw.hs.kr" },
  ],
  log: {
    login: false,
    id: "",
    password: "",
  },
  rent: [
    { id: 1, rent: false },
    { id: 2, rent: false },
    { id: 3, rent: false },
    { id: 4, rent: true },
    { id: 5, rent: false },
    { id: 6, rent: false },
    { id: 7, rent: false },
    { id: 8, rent: false },
    { id: 9, rent: true },
    { id: 10, rent: false },
  ],
};

export const Login = "LOGIN";
export const SignUp = "SIGN_UP";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {
        ...state,
        log: {
          ...state,
          login: true,
          id: action.id,
          password: action.password,
        },
      };
    case SignUp:
      return {
        ...state,
        user: [
          ...state.user,
          {
            user: "김민성",
            id: action.id,
            password: action.password,
            email: action.email,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
