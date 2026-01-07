"use client";

import { postHistory } from "@/services/DataService";
import { generateMetadata } from "@/utils/metadata";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const metadata = generateMetadata(
  "JSK - OPINIONS | Mentions Légales ",
  "Chroniques et analyses par Jed Sophonie Koboude pour faire progresser le monde à petits pas"
);

const MentionsLegales = () => {
  const pathname = usePathname();

  useEffect(() => {
    postHistory(pathname);
  }, [pathname]);
  return <div>ok</div>;
};

export default MentionsLegales;
