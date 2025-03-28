import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={`${styles.header} container-fluid`}>
      <nav className={`${styles.navbar} container-xl`}>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className={`${styles.searchContainer} d-flex align-items-center col-6 col-xl-4`}>
              <Image src={"/assets/icons/search.svg"} width={20} height={20} alt="Icono de lupa" />
              <input type="search" className={`${styles.searchInput}`} placeholder="Encuentra series y películas"></input>
            </div>
            <div className="col-6 col-xl-8 d-flex align-items-center">
              <div className="d-flex justify-content-end justify-content-xl-center w-100">
                <Image className={`${styles.menuIcon} d-block d-xl-none`} src="/assets/icons/menu.svg" alt="Icono de menú" width={32} height={32}></Image>
                <div className={`${styles.navbarLinks} d-none d-xl-flex`}>
                  <ul className="d-flex flex-row">
                    <li>Series</li>
                    <li>Películas</li>
                    <li>Iniciar Sesión</li>
                    <li>Registrarse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
