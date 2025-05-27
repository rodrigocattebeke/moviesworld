"use client";

import Link from "next/link";
import styles from "./RegisterPage.module.css";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const RegisterPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useRouter();

  const userRegex = /^[A-Za-z1-9]{4,}$/; // Validates that the user:
  // - Starts with one or more word characters, dots, or hyphens (before the "@")
  // - Followed by a single "@" symbol
  // - Followed by one or more word characters, dots, or hyphens (domain name)
  // - Followed by a dot "."
  // - Ends with at least two word characters (top-level domain like "com", "org", "net", etc.)

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Validates that the password:
  // - Contains at least one lowercase letter
  // - Contains at least one uppercase letter
  // - Contains at least one digit
  // - Is at least 8 characters long

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userRegex.test(user)) {
      setUserErrorMessage("El nombre de usuario debe tener al menos 4 letras y contener solo caracteres alfabéticos (A-Z o a-z) o números (1 - 9), sin espacios ni símbolos.");
      return setUserError(true);
    }
    if (!passwordRegex.test(password)) {
      return setPasswordError(true);
    }

    const MLUsersDB = JSON.parse(localStorage.getItem("MLUsersDB")) || {};

    if (MLUsersDB.hasOwnProperty(user)) {
      setUserErrorMessage("El nombre de usuario ya existe. Intenta con otro nombre de usuario.");
      return setUserError(true);
    }
    MLUsersDB[user] = {
      password,
    };

    localStorage.setItem("MLUsersDB", JSON.stringify(MLUsersDB));
    localStorage.setItem("MLLoggedUser", user);
    navigate.push("./");
  };

  const onUserChange = (e) => {
    setUser(e.target.value);
    setUserError(false);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  return (
    <div className="container-fluid ">
      <section className="container-xl d-flex align-items-center justify-content-center mb-3">
        <div className={styles.container}>
          <div className={styles.backToHomeContainer}>
            <Link href={"/"}>
              <ArrowBack width="1.8rem" height="1.8rem" />
            </Link>
          </div>
          <div className={styles.registerModal}>
            <Image src={"/assets/images/logo.png"} className={styles.logo} width={270} height={50} alt="Logo de MoviesLoc" />
            <div className={styles.formContainer}>
              <h2 className={styles.title}>Crea tu cuenta</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" name="user" value={user} onChange={(e) => onUserChange(e)} required />
                <small className={`${styles.userError} ${styles.inputError} ${userError ? styles.active : ""}`}>{userErrorMessage}</small>
                {/*  */}
                <input type="password" placeholder="Contraseña" name="password" value={password} onChange={(e) => onPasswordChange(e)} required />{" "}
                <small className={`${styles.passwordError} ${styles.inputError} ${passwordError ? styles.active : ""}`}>
                  Contraseña no válida. Debe tener al menos:
                  {
                    <ul>
                      <li>Una letra minúscula</li>
                      <li>Una letra mayúscula</li>
                      <li>Un número</li>
                      <li>Ocho caracteres en total como mínimo</li>
                    </ul>
                  }
                </small>
                <button type="submit" name="submit" className={`${styles.button} button`}>
                  Registrarse
                </button>
              </form>
              <button type="submit" name="submit" className={`${styles.button} button secondary`}>
                ¿Ya tienes una cuenta? Inicia sesión
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
