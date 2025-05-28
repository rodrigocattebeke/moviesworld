import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { Menu } from "@/components/icons/Menu";
import { SearchInput } from "./SearchInput/SearchInput";
import { OffcanvasHeaderMenu } from "./OffcanvasHeaderMenu/OffcanvasHeaderMenu";
import { NavbarLinks } from "./NavbarLinks/NavbarLinks";
import { Profile } from "./Profile/Profile";

export const Header = () => {
  return (
    <header className={`${styles.header} container-fluid`}>
      <nav className={`${styles.navbar} container-xxl`}>
        <div className="container-fluid h-100">
          <div className="row h-100 m-0">
            <div className={`d-flex col-9 col-md-9 col-xl-5 ps-0`}>
              <Link href={"/"}>
                <Image src={"/assets/images/logo-short-form.png"} alt="Logo de MoviesLoc" width={32} height={32}></Image>
              </Link>
              <div className={styles.searchContainer}>
                <SearchInput />
              </div>
            </div>
            <div className="col-3 col-md-3 col-xl-7 d-flex align-items-center p-0">
              <div className="d-flex justify-content-end justify-content-xl-center w-100 h-100">
                <div className={`order-2 dropdown`}>
                  <Profile />
                </div>
                <div className="d-block d-xl-none order-3">
                  <a data-bs-toggle="offcanvas" data-bs-target="#headerOffcanvasMenu" role="button" aria-controls="headerOffcanvasMenu">
                    <Menu width={"2rem"} height={"2rem"} />
                  </a>
                </div>
                {/* dont show when screen < xl size */}
                <NavbarLinks className="d-none d-xl-flex order-1" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <OffcanvasHeaderMenu />
    </header>
  );
};
