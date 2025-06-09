"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const GoToTop = ({ children }) => {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return children;
};
