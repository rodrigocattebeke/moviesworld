"use client";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import Script from "next/script";
import { usePathname } from "next/navigation";

export const ClientLayout = ({ children }) => {
  const pathName = usePathname();

  const hideHeader = pathName == "/registro" || pathName == "/iniciar-sesion";

  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
      <Footer />
      <Script src="/assets/js/bootstrap.bundle.min.js" />
    </>
  );
};
