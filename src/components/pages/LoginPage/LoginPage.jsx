"use client";

import Link from "next/link";
import styles from "./LoginPage.module.css";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import { useContext, useState } from "react";
import { LoginContext } from "@/contexts/LoginContext";

export const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { auth } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !password) {
      return setLoginError(false);
    }
    const loginRes = auth.login(user, password);
    setLoginError(!loginRes);
  };

  const onUserChange = (e) => {
    setUser(e.target.value);
    setLoginError(false);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(false);
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
          <div className={styles.loginModal}>
            <Image src={"/assets/images/logo.png"} className={styles.logo} width={270} height={50} alt="Logo de MoviesLoc" />
            <div className={styles.formContainer}>
              <h2 className={styles.title}>Inicia Sesión</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" name="user" value={user} onChange={(e) => onUserChange(e)} required />

                <input type="password" placeholder="Contraseña" name="password" value={password} onChange={(e) => onPasswordChange(e)} required />
                <small className={`${styles.loginError} ${loginError ? styles.active : ""}`}>El nombre de usuario o la contraseña son incorrectas.</small>

                <button type="submit" name="submit" className={`${styles.button} button`}>
                  Iniciar sesión
                </button>
              </form>
              <Link href={"/registro"}>
                <button type="submit" name="submit" className={`${styles.button} button secondary`}>
                  ¿No tenés cuenta? Crea una
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
