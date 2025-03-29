import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={`${styles.header} container-fluid`}>
      <nav className={`${styles.navbar} container-xxl`}>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className={`${styles.searchContainer} d-flex pe-0 align-items-center col-6 col-xl-5`}>
              <Image src={"/assets/icons/search.svg"} width={20} height={20} alt="Icono de lupa" />
              <input type="search" id="searchInput" className={`${styles.searchInput}`} placeholder="Encuentra series y películas"></input>
            </div>
            <div className="col-6 col-xl-7 d-flex align-items-center">
              <div className="d-flex justify-content-end justify-content-xl-center w-100">
                <Image className={`${styles.menuIcon} d-block d-xl-none`} src="/assets/icons/menu.svg" alt="Icono de menú" width={32} height={32}></Image>
                <div className={`${styles.navbarLinks} d-none d-xl-flex`}>
                  <ul className="d-flex flex-row">
                    <li>
                      <a href="#">Series</a>
                    </li>
                    <li>
                      <a href="#">Películas</a>
                    </li>
                    <li>
                      <a href="#">Iniciar Sesión</a>
                    </li>
                    <li>
                      <a href="#" className={`${styles.registerButton} button`}>
                        Registrarse gratis
                      </a>
                    </li>
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
