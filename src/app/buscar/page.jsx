import Buscar from "@/components/pages/Buscar/Buscar";
import { Suspense } from "react";
export default function Search() {
  return (
    <Suspense fallback={<p>Aca tengo que poner algo despues mientras carga</p>}>
      <Buscar />
    </Suspense>
  );
}
