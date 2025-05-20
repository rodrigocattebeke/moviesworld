import { Loader } from "@/components/Loader/Loader";
import SearchPage from "@/components/pages/SearchPage/SearchPage";
import { Suspense } from "react";
export default function Search() {
  return (
    <Suspense fallback={<Loader />}>
      <SearchPage />
    </Suspense>
  );
}
