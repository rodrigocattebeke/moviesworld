import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { Menu } from "@/components/icons/Menu";
import { SearchInput } from "./SearchInput/SearchInput";
import { OffcanvasHeaderMenu } from "./OffcanvasHeaderMenu/OffcanvasHeaderMenu";

export const Header = () => {
  return (
    <header className={`${styles.header} container-fluid`}>
      <nav className={`${styles.navbar} container-xxl`}>
        <div className="container-fluid h-100">
          <div className="row h-100 m-0">
            <div className={`${styles.searchContainer} col-9 col-md-8 col-xl-5`}>
              <SearchInput />
            </div>
            <div className="col-3 col-md-4 col-xl-7 d-flex align-items-center">
              <div className="d-flex justify-content-end justify-content-xl-center w-100">
                <div className="d-block d-xl-none">
                  <a data-bs-toggle="offcanvas" data-bs-target="#headerOffcanvasMenu" role="button" aria-controls="headerOffcanvasMenu">
                    <Menu width={"2rem"} height={"2rem"} />
                  </a>
                </div>
                {/* dont show when screen < xl size */}
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
      <OffcanvasHeaderMenu />
    </header>
  );
};
