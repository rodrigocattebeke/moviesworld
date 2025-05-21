"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "Movies Loc",
//   description: "Movies Loc es una plataforma donde podés descubrir películas y series de todo el mundo. Utiliza la API de TMDB para ofrecerte información actualizada y detallada sobre los títulos más populares, próximos estrenos y clásicos del cine. Explorá tráilers, sinopsis, puntuaciones y más, todo en una interfaz simple y rápida.",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const hideHeader = pathName == "/registro" || pathName == "/iniciar-sesion";

  return (
    <html lang="es">
      <body className={``}>
        {!hideHeader && <Header />}
        <main>{children}</main>
        <Footer />
        <Script src="/assets/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
