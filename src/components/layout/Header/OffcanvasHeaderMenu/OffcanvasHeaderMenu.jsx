import Link from "next/link";
import styles from "./OffcanvasHeaderMenu.module.css";

export const OffcanvasHeaderMenu = () => {
  return (
    <>
      <div className={`${styles.offcanvas} offcanvas offcanvas-start`} tabIndex="-1" id="headerOffcanvasMenu" aria-labelledby="headerOffcanvasMenuLabel">
        <div className="offcanvas-header">
          <Link href={"/"}>
            <h3 className="offcanvas-title" id="headerOffcanvasMenuLabel" data-bs-dismiss="offcanvas">
              Movies Loc
            </h3>
          </Link>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="container">
            <h4>Peliculas</h4>
            <ul className={styles.headerUl}>
              <li>
                <Link href="/peliculas/populares" data-bs-dismiss="offcanvas">
                  Lo más popular
                </Link>
              </li>
              <li>
                <Link href="/peliculas/mejores_valoradas" data-bs-dismiss="offcanvas">
                  Mejores valoradas
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
          {/* <div className="container">
            <h4>Series</h4>
            <ul className={styles.headerUl}>
              <li>
                <Link href="#" data-bs-dismiss="offcanvas">
                  Lo más popular
                </Link>
              </li>
              <li>
                <Link href="#" data-bs-dismiss="offcanvas">
                  Mejores valoradas
                </Link>
              </li>
              <li>
                <Link href="#" data-bs-dismiss="offcanvas">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="#" data-bs-dismiss="offcanvas">
                  Lo más nuevo
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};
