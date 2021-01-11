import { createContext, useReducer } from "react";
// import { v4 as uuid } from "uuid";
import reducer from "./reducer";

const initState = {
  users: [],
};

export const GlobalContext = createContext(initState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };

  const editUser = (user) => {
    dispatch({ type: "EDIT_USER", payload: user });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, deleteUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
