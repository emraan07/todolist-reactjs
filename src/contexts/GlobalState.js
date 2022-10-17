import { createContext } from "react";
// initial state
export const initialState = {
  transactions: []
};
// create context

export const GlobalContext = createContext(initialState);
