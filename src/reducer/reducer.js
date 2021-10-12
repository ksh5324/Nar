const initialState = {
  log: {
    login: null,
    grade: 0,
    classTo: 0,
    num: 0,
  },
  rent: [
    { id: "1", rent: false },
    { id: "2", rent: "1304" },
    { id: "3", rent: "1108" },
    { id: "4", rent: "1220" },
    { id: "5", rent: "1115" },
    { id: "6", rent: false },
    { id: "7", rent: false },
    { id: "8", rent: false },
    { id: "9", rent: false },
    { id: "10", rent: false },
  ],
};

export const Login = "LOGIN";
export const SignUp = "SIGN_UP";
export const RENT = "RENT";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {
        ...state,
        log: {
          ...state,
          login: `${action.grade}${action.classTo}${action.number}`,
          grade: action.grade,
          classTo: action.classTo,
          num: action.number,
        },
      };
    case RENT: {
      return {
        ...state,
        rent: state.rent.map((item) =>
          item.id === action.index ? { ...item, rent: action.value } : item
        ),
      };
    }
    // case SignUp:
    //   return {
    //     ...state,
    //     user: [
    //       ...state.user,
    //       {
    //         user: "김민성",
    //         id: action.id,
    //         password: action.password,
    //         email: action.email,
    //       },
    //     ],
    //   };
    default:
      return state;
  }
};

export default reducer;
