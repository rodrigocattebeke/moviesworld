import { Loader } from "@/components/Loader/Loader";
import Buscar from "@/components/pages/Buscar/Buscar";
import { Suspense } from "react";
export default function Search() {
  return (
    <Suspense fallback={<Loader />}>
      <Buscar />
    </Suspense>
  );
}
