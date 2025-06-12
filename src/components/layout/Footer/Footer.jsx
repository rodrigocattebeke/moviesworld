import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="container">
        <p>
          Datos proveidos por{" "}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
            TMDb
          </a>
        </p>
        <p>Este sitio web utiliza TMDB y las API de TMDB, pero no está respaldado, certificado ni aprobado de otro modo por TMDB.</p>
        <p>
          Todo el contenido disponible está vinculado o incrustado desde plataformas de terceros con fines informativos. El uso del sitio implica la aceptación de nuestros <Link href={"/terminos-y-condiciones"}>términos y condiciones.</Link>
        </p>
      </div>
    </footer>
  );
};
