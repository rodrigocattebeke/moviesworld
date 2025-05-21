"use client";

import Link from "next/link";
import styles from "./RegisterPage.module.css";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";

export const RegisterPage = () => {
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
              <h2 className={styles.title}>Crea tu cuenta</h2>
              <form className={styles.form}>
                <input type="email" placeholder="ejemplo@email.com" name="email" />
                <input type="password" placeholder="Contraseña" name="password" />
                <button type="submit" name="submit" className={`${styles.button} button`}>
                  Iniciar sesión
                </button>
              </form>
              <button type="submit" name="submit" className={`${styles.button} button secondary`}>
                ¿No tenés cuenta? Crea una
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
