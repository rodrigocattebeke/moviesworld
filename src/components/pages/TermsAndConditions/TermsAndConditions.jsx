import styles from "./TermsAndConditions.module.css";
export const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.termsAndConditions} container-xxl`}>
        <section className={`container`}>
          <h1>TÉRMINOS Y CONDICIONES DEL SERVICIO</h1>

          <h2>1. Información General</h2>
          <p>
            MoviesLoc es un sitio web dedicado a brindar información sobre películas y series. Los datos presentados —como sinopsis, calificaciones, imágenes, fechas de estreno y más— son obtenidos mediante la{" "}
            <a href="https://developer.themoviedb.org/docs/getting-started" rel="noopener noreferrer" className={styles.link}>
              API oficial de The Movie Database (TMDB)
            </a>
            , una fuente pública de contenido informativo sobre el mundo del cine y la televisión.
          </p>

          <h2>2. Uso del Sitio</h2>
          <p>El uso de MoviesLoc implica la aceptación de estos Términos y Condiciones. El sitio está destinado únicamente para fines informativos, educativos y de entretenimiento. No se aloja, almacena ni distribuye material con derechos de autor como películas, series o transmisiones en vivo.</p>

          <h2>3. Propiedad Intelectual</h2>
          <p>Todos los nombres, logotipos, imágenes y marcas relacionadas con películas o series pertenecen a sus respectivos propietarios. MoviesLoc no es dueño ni distribuidor oficial de dicho contenido, y solo presenta datos disponibles públicamente a través de TMDB.</p>

          <h2>4. Enlaces y APIs de Terceros</h2>
          <p>MoviesLoc puede contener enlaces o integraciones con servicios de terceros. No nos hacemos responsables por el contenido, políticas o prácticas de sitios externos. TMDB es una fuente externa y se utiliza respetando sus términos de uso.</p>
          <h2>5. Cambios en los Términos</h2>
          <p>MoviesLoc se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio se notificará mediante el sitio web y entrará en vigor de forma inmediata tras su publicación.</p>

          <h2>6. Contacto</h2>
          <p>Si tenés alguna duda o reclamo relacionado al uso de la información mostrada en el sitio, podés contactarnos mediante nuestro formulario o correo electrónico disponible en la sección de contacto.</p>
        </section>
      </div>
    </div>
  );
};
