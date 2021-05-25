import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id })
  };

  const addTransaction = (amount) => {
    dispatch({ type: "ADD_TRANSACTION", payload: amount })
  }

  return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
    {children}
  </GlobalContext.Provider>)
}