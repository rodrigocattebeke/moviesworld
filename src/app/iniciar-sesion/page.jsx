import { LoginPage } from "@/components/pages/LoginPage/LoginPage";

export const metadata = {
  title: "Iniciar Sesión | MoviesLoc",
  description: "Accedé a tu cuenta de MoviesLoc para guardar tus series y películas favoritas. Empezá a disfrutar de todo el contenido personalizado.",
};

export default async function Login() {
  return <LoginPage></LoginPage>;
}
