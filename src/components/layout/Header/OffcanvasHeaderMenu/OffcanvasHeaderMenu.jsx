"use client";

import Link from "next/link";
import styles from "./OffcanvasHeaderMenu.module.css";
import { useContext } from "react";
import { LoginContext } from "@/contexts/LoginContext";

export const OffcanvasHeaderMenu = () => {
  const { user } = useContext(LoginContext);
  return (
    <>
      <div className={`${styles.offcanvas} offcanvas offcanvas-start`} tabIndex="-1" id="headerOffcanvasMenu" aria-labelledby="headerOffcanvasMenuLabel">
        <div className="offcanvas-header d-flex flex-column align-items-end">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          {user.isLogged ? (
            ""
          ) : (
            <div className={styles.buttonContainer}>
              <Link href={"/iniciar-sesion"}>
                <button type="button" className="button secondary" data-bs-dismiss="offcanvas">
                  Iniciar sesión
                </button>
              </Link>
              <Link href={"/registro"}>
                <button type="button" className="button" data-bs-dismiss="offcanvas">
                  Registrarse
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="offcanvas-body">
          <div className="container">
            <h4>Peliculas</h4>
            <ul className={styles.headerUl}>
              <li>
                <Link href="/peliculas/populares">
                  <span data-bs-dismiss="offcanvas">Lo más popular</span>
                </Link>
              </li>
              <li>
                <Link href="/peliculas/mejores_valoradas">
                  <span data-bs-dismiss="offcanvas">Mejores valoradas</span>
                </Link>
              </li>
              {/* <li>
                <Link href="#" data-bs-dismiss="offcanvas">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="#" data-bs-dismiss="offcanvas">
                  Lo más nuevo
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="container">
            <h4>Series</h4>
            <ul className={styles.headerUl}>
              <li>
                <Link href="/series/populares">
                  <span data-bs-dismiss="offcanvas">Populares</span>
                </Link>
              </li>
              <li>
                <Link href="/series/mejores_valoradas">
                  <span data-bs-dismiss="offcanvas">Mejores valoradas</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
