import Image from "next/image";
import styles from "./Hero.module.css";
import { getBackdropUrl } from "@/utils/getBackdropUrl";

export const Hero = async () => {
  const res = await fetch("https://moviesloc.netlify.app/api/peliculas/populares");
  const data = await res.json();
  const heroMovie = data.results[0];
  const backdropImg = getBackdropUrl(heroMovie.backdrop_path);

  return (
    <section className={`${styles.heroContainer} container-xxl p-0`}>
      <div className={`${styles.heroImgContainer}`}>
        <Image src={backdropImg} loading="lazy" className={`${styles.heroImg}`} alt={`Banner de la película ${heroMovie.title}`} width={700} height={300} sizes="100vw" />
      </div>
      <div className={`container-fluid`}>
        <div className={`${styles.infoContainer} container p-0`}>
          <div className={`${styles.titleContainer} container-xl`}>
            <p className={`${styles.title}`}>{heroMovie.title}</p>
          </div>
          <div className={`${styles.description}`}>
            <div className="container-xl">
              <div className="row">
                <div className="align-items-center col-12 col-md-9 pe-0">
                  <p>{heroMovie.overview}</p>
                </div>
                <div className="d-flex justify-content-center justify-content-md-end align-items-center col-12 col-md-3">
                  <button className="button">Ver ahora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
