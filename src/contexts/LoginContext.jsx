"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();
const userBasicInformation = {
  user: undefined,
  favorites: {
    movies: undefined,
    series: undefined,
  },
};

export const LoginProvider = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState(undefined);
  const isLogged = !!loggedUserData;
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
    const savedLoggedUser = localStorage.getItem("MLLoggedUser") || undefined;

    if (savedLoggedUser) {
      if (usersDB.hasOwnProperty(savedLoggedUser)) {
        const { password, ...publicUserData } = usersDB[savedLoggedUser];
        setLoggedUserData(publicUserData);
      }
    }
  }, [usersDB]);

  //Function for refresh users
  const refreshUsers = () => {
    const usersDB = JSON.parse(localStorage.getItem("MLUsersDB")) || {};
    setUsersDB(usersDB);
  };

  const register = (user, password) => {
    if (usersDB.hasOwnProperty(user)) {
      return {
        isSuccess: false,
        errorMessage: "El nombre de usuario ya existe. Intenta con otro nombre de usuario.",
      };
    }

    const usersDBCloned = usersDB;

    usersDBCloned[user] = {
      ...userBasicInformation,
      user,
      password,
    };

    localStorage.setItem("MLUsersDB", JSON.stringify(usersDBCloned));
    localStorage.setItem("MLLoggedUser", user);
    setLoggedUserData({ ...userBasicInformation, user });
    refreshUsers();
    navigate.push("./");
    return { isSuccess: true, errorMessage: undefined };
  };

  //Login
  const login = (user, password) => {
    refreshUsers();
    if (usersDB.hasOwnProperty(user) && usersDB[user].password === password) {
      localStorage.setItem("MLLoggedUser", user);
      navigate.push("./");
      return true;
    } else {
      return false;
    }
  };

  //Log out
  const logout = () => {
    if (loggedUserData) {
      setLoggedUserData(undefined);
      localStorage.removeItem("MLLoggedUser");
    }
  };

  return <LoginContext.Provider value={{ isLogged, login, logout, loggedUserData, register }}>{children}</LoginContext.Provider>;
};

export { LoginContext };
