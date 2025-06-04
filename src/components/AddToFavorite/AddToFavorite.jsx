import styles from "./AddToFavorite.module.css";
import { Favorite } from "../icons/Favorite";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "@/contexts/LoginContext";
import { useRouter } from "next/navigation";
import { FavoriteFilled } from "../icons/FavoriteFilled";

export const AddToFavorite = ({ type = undefined, id = undefined }) => {
  const { favorites, user } = useContext(LoginContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useRouter();

  if (!type) console.error("Se debe de pasar el tipo de contenido. Opciones válidas: - serie , - pelicula");
  if (!id) console.error("Se debe pasar el id de la serie o pelicula a agregar.");

  //initial state of isFavorite
  useEffect(() => {
    const initialState = favorites.isFavorite(type, id);
    setIsFavorite(initialState);
  }, []);

  //If the loggedUserData.favorites changes, update isFavorite state;
  useEffect(() => {
    const isFavorite = favorites.isFavorite(type, id);
    setIsFavorite(isFavorite);
  }, [user.loggedUserData]);

  // Handle isFavorite

  const handleClick = () => {
    if (!user.isLogged) return navigate.push("/iniciar-sesion");

    const isFavorite = favorites.isFavorite(type, id);

    if (type == "serie") {
      //If the serie is already added on favorites, remove, else, add to favorites.
      isFavorite ? favorites.removeSerie(id) : favorites.addSerie(id);
    } else if (type == "pelicula") {
      //If the movie is already added on favorites, remove, else, add to favorites.
      isFavorite ? favorites.removeMovie(id) : favorites.addMovie(id);
    }
  };

  return (
    <div className={styles.container}>
      <span onClick={handleClick} className={styles.favoriteContainer}>
        <FavoriteFilled className={`${styles.favoriteFilled} ${isFavorite ? styles.active : ""}`} />
        <Favorite width="2rem" height="2rem" className={styles.favorite} />
      </span>
    </div>
  );
};
