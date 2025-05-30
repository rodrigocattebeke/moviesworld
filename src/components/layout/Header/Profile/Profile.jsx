"use client";
import { Person } from "@/components/icons/Person";
import styles from "./Profile.module.css";
import { useContext } from "react";
import { LoginContext } from "@/contexts/LoginContext";
import Link from "next/link";

export const Profile = () => {
  const { auth, user } = useContext(LoginContext);

  return (
    <div className={`${styles.personIconContainer}`}>
      <span data-bs-toggle="dropdown" className={styles.personIcon}>
        <Person width={"1.9rem"} height={"1.9rem"} />
      </span>
      <ul className="dropdown-menu">
        <li className="dropdown-item">Próximamente...</li>
        {user.isLogged ? (
          <li>
            <p className={`dropdown-item`} onClick={auth.logout}>
              Cerrar sesión
            </p>
          </li>
        ) : (
          ""
        )}
        {user.isLogged ? (
          ""
        ) : (
          <li>
            <Link href={"/iniciar-sesion"} className={`dropdown-item`}>
              Iniciar sesión
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
