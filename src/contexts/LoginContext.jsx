"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useReducer, useState } from "react";
import { favoritesReducer } from "./reducers/favoritesReducer";
import { ADD_MOVIE, ADD_SERIE, REMOVE_MOVIE, REMOVE_SERIE, SYNC_FAVORITES } from "./reducers/favoritesTypes";

const LoginContext = createContext();
const userBasicInformation = {
  user: undefined,
  favorites: {
    moviesId: [],
    seriesId: [],
  },
};

export const LoginProvider = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState(undefined);
  const isLogged = !!loggedUserData;
  const [usersDB, setUsersDB] = useState(undefined);
  const navigate = useRouter();

  const [userFavorites, dispatchFavorites] = useReducer(favoritesReducer, userBasicInformation.favorites);

  //  // // ACCOUNT LOGIN AND LOG OUT MANAGE
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
        dispatchFavorites({ type: SYNC_FAVORITES, payload: publicUserData.favorites });
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

  //  // // MOVIES AND SERIES MANAGE
  useEffect(() => {
    if (!isLogged) return;

    if (userFavorites && loggedUserData) {
      const loggedUserDataUpdated = { ...loggedUserData, userFavorites };
      setLoggedUserData(loggedUserDataUpdated);
    }
  }, [userFavorites, isLogged]);

  const addFavoriteMovie = (movieId) => {
    const action = {
      type: ADD_MOVIE,
      payload: movieId,
    };

    dispatchFavorites(action);
  };

  const removeFavoriteMovie = (movieId) => {
    const action = {
      type: REMOVE_MOVIE,
      payload: movieId,
    };

    dispatchFavorites(action);
  };

  const addFavoriteSerie = (serieId) => {
    const action = {
      type: ADD_SERIE,
      payload: serieId,
    };

    dispatchFavorites(action);
  };

  const removeFavoriteSerie = (serieId) => {
    const action = {
      type: REMOVE_SERIE,
      payload: serieId,
    };

    dispatchFavorites(action);
  };

  //AGROUP FUNCTIONS
  const auth = {
    login,
    register,
    logout,
  };

  const favorites = {
    addMovie: addFavoriteMovie,
    removeMovie: removeFavoriteMovie,
    addSerie: addFavoriteSerie,
    removeSerie: removeFavoriteSerie,
  };

  const user = {
    isLogged,
    loggedUserData,
  };

  return <LoginContext.Provider value={{ auth, favorites, user }}>{children}</LoginContext.Provider>;
};

export { LoginContext };
