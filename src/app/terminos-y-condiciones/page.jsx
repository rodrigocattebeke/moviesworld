import { TermsAndConditions } from "@/components/pages/TermsAndConditions/TermsAndConditions";

export const metadata = {
  title: "Términos y Condiciones | MoviesLoc",
  description: "Leé los términos y condiciones de uso de MoviesLoc. Informate sobre tus derechos, responsabilidades y cómo protegemos tu información.",
};

export default async function Conditions() {
  return <TermsAndConditions />;
}
