import { RegisterPage } from "@/components/pages/RegisterPage/RegisterPage";
import React from "react";

export const metadata = {
  title: "Crear Cuenta | MoviesLoc",
  description: "Registrate gratis en MoviesLoc para empezar a guardar tus series y películas favoritas y recibir recomendaciones a tu medida.",
};

export default async function Registro() {
  return <RegisterPage />;
}
