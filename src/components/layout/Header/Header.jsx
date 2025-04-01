import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { Menu } from "@/components/icons/Menu";
import { Search } from "@/components/icons/Search";

export const Header = () => {
  return (
    <header className={`${styles.header} container-fluid`}>
      <nav className={`${styles.navbar} container-xxl`}>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className={`${styles.searchContainer} d-flex pe-0 align-items-center col-6 col-xl-5`}>
              <Search width={"1.25rem"} height={"1.25rem"} />
              <input type="search" id="searchInput" className={`${styles.searchInput}`} placeholder="Encuentra series y películas"></input>
            </div>
            <div className="col-6 col-xl-7 d-flex align-items-center">
              <div className="d-flex justify-content-end justify-content-xl-center w-100">
                <div className="d-block d-xl-none">
                  <Menu width={"2rem"} height={"2rem"} />
                </div>

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
