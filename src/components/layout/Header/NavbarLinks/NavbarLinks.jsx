import Link from "next/link";
import "./NavbarLinks.css";

export const NavbarLinks = ({ className = "", ...props } = {}) => {
  return (
    <div className={`navbarLinks ${className}`} {...props}>
      <ul className="d-flex flex-row">
        <li>
          <div className="dropdown h-100">
            <Link href="#" className="my-auto" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Series
            </Link>

            <ul className="dropdown-menu">
              {/* <li>
                <Link className="dropdown-item" href="#">
                  Lo mas popular
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Destacados
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Categorias
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Lo más nuevo
                </Link>
              </li> */}
              <li>
                <Link className="dropdown-item" href="#">
                  Próximamente...
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="dropdown h-100">
            <Link href="#" className="my-auto" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Peliculas
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="/peliculas/populares">
                  Lo mas popular
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/peliculas/mejores_valoradas">
                  Mejores valorados
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="#" className="my-auto" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Iniciar sesión
          </Link>
        </li>
        <li>
          <Link href="#" className={`registerButton button`}>
            Registrarse gratis
          </Link>
        </li>
      </ul>
    </div>
  );
};
