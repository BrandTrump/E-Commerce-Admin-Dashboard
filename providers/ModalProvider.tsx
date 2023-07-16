"use client";

import StoreModal from "@/components/modals/StoreModal";
import { useEffect, useState } from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <>
      <StoreModal />
    </>
  );
}

export default ModalProvider;
