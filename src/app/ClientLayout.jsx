"use client";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import Script from "next/script";
import { LoginProvider } from "@/contexts/LoginContext";
import { usePathname } from "next/navigation";

export const ClientLayout = ({ children }) => {
  const pathName = usePathname();

  const hideHeader = pathName == "/registro" || pathName == "/iniciar-sesion";

  return (
    <>
      <LoginProvider>
        {!hideHeader && <Header />}
        <main>{children}</main>
        <Footer />
      </LoginProvider>
      <Script src="/assets/js/bootstrap.bundle.min.js" />
    </>
  );
};
