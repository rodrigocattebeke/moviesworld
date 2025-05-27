"use client";
import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const isLogged = !!userData;

  //Get the users DB for the localStorage
  const usersDB = JSON.parse(localStorage.getItem("MLUsersDB")) || {};

  //If the localstorage have a saved user logged, find it.
  useEffect(() => {
    const savedUserLogged = localStorage.getItem("MLLoggedUser") || undefined;

    if (savedUserLogged) {
      if (usersDB.hasOwnProperty(savedUserLogged)) {
        const { password, ...publicUserData } = usersDB[savedUserLogged];
        setUserData(publicUserData);
      }
    }
  }, []);

  const logout = () => {
    if (userData) return setUserData(undefined);
  };

  return <LoginContext.Provider value={(isLogged, logout, userData)}>{children}</LoginContext.Provider>;
};

export { LoginContext };
