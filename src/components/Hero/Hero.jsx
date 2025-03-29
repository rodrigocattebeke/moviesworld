import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={`${styles.heroContainer} container-xxl p-0`}>
      <div className={`${styles.heroImgContainer}`}>
        <Image src={"/assets/images/somos_campeones.jpeg"} loading="lazy" className={`${styles.heroImg}`} alt="Banner de la película ..." fill="true" />
      </div>
      <div className={`${styles.infoContainer} container-fluid p-0`}>
        <div className="container-xl">
          <p className={`${styles.title}`}>Campeones</p>
        </div>
        <div className={`${styles.description}`}>
          <div className="container-xl">
            <div className="row">
              <div className="align-items-center col-12 col-md-9 pe-0">
                <p>Javier Fesser dirige esta cinta ganadora de tres Goya y que arrasó en taquilla sobre un equipo de baloncesto de personas con discapacidad intelectual</p>
              </div>
              <div className="d-flex justify-content-center justify-content-md-end align-items-center col-12 col-md-3">
                <button className="button">Ver ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
