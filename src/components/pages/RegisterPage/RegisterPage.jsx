"use client";

import Link from "next/link";
import styles from "./RegisterPage.module.css";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import { useContext, useState } from "react";
import { LoginContext } from "@/contexts/LoginContext";
import { useRouter } from "next/navigation";

export const RegisterPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userIsSuccess, setUserIsSuccess] = useState(true);
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigation = useRouter();

  const pageHostName = "moviesloc.netlify.app";

  const { auth } = useContext(LoginContext);

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
      return setUserIsSuccess(false);
    }
    if (!passwordRegex.test(password)) {
      return setPasswordError(true);
    }

    const { isSuccess, errorMessage } = auth.register(user, password);
    // The boolean variable `isSuccess` is negated because if `isSuccess` is false,
    // then `setUserError` should be set to true.
    setUserIsSuccess(isSuccess);
    setUserErrorMessage(errorMessage);
  };

  const onUserChange = (e) => {
    setUser(e.target.value);
    setUserIsSuccess(true);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  //Handle back button
  const handleBack = () => {
    if (document.referrer) {
      const hostname = new URL(document.referrer).hostname;
      if (hostname == pageHostName) {
        window.history.back();
      } else {
        navigation.push("/");
      }
    } else {
      navigation.push("/");
    }
  };

  return (
    <div className="container-fluid ">
      <section className="container-xl d-flex align-items-center justify-content-center mb-3">
        <div className={styles.container}>
          <div className={styles.backToHomeContainer}>
            <span onClick={handleBack}>
              <ArrowBack width="1.8rem" height="1.8rem" />
            </span>
          </div>
          <div className={styles.registerModal}>
            <Image src={"/assets/images/logo.png"} className={styles.logo} width={270} height={50} alt="Logo de MoviesLoc" />
            <div className={styles.formContainer}>
              <h2 className={styles.title}>Crea tu cuenta</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" name="user" value={user} onChange={(e) => onUserChange(e)} required />
                <small className={`${styles.userIsSuccess} ${styles.inputError} ${userIsSuccess ? "" : styles.active}`}>{userErrorMessage}</small>
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
              <Link href={"/iniciar-sesion"}>
                <button type="submit" name="submit" className={`${styles.button} button secondary`}>
                  ¿Ya tienes una cuenta? Inicia sesión
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
