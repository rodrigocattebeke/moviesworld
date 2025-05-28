"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const isLogged = !!userData;
  const [usersDB, setUsersDB] = useState(undefined);
  const navigate = useRouter();

  //Get the users DB for the localStorage
  useEffect(() => {
    const usersDB = JSON.parse(localStorage.getItem("MLUsersDB")) || {};
    setUsersDB(usersDB);
  }, []);

  //If the localstorage have a saved user logged, find it.
  useEffect(() => {
    if (!usersDB) return;
    const savedUserLogged = localStorage.getItem("MLLoggedUser") || undefined;

    if (savedUserLogged) {
      if (usersDB.hasOwnProperty(savedUserLogged)) {
        const { password, ...publicUserData } = usersDB[savedUserLogged];
        setUserData(publicUserData);
      }
    }
  }, [usersDB]);

  //Function for refresh users
  const refreshUsers = () => {
    const usersDB = JSON.parse(localStorage.getItem("MLUsersDB")) || {};
    setUsersDB(usersDB);
  };

  //Login
  const login = (user, password) => {
    refreshUsers();
    let loginRes = false;

    if (usersDB.hasOwnProperty(user)) {
      if (usersDB[user].password && usersDB[user].password === password) {
        localStorage.setItem("MLLoggedUser", user);
        navigate.push("./");
        return (loginRes = true);
      } else {
        return (loginRes = false);
      }
    } else {
      return (loginRes = false);
    }
  };

  //Log out
  const logout = () => {
    if (userData) {
      setUserData(undefined);
      localStorage.removeItem("MLLoggedUser");
    }
  };

  return <LoginContext.Provider value={{ isLogged, login, logout, userData }}>{children}</LoginContext.Provider>;
};

export { LoginContext };
