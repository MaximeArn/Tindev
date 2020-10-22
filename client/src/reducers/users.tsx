/** @format */
const initialState = {
  users: [],
};

const users = (state = initialState, { type, users }: any) => {
  switch (type) {
    case "SET_USERS":
      return { ...state, users };
    default:
      return state;
  }
};

export default users;
