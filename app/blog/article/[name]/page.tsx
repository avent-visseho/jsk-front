"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    return router.replace("/blog");
  }, []);

  return router.replace("/blog");
  return <div></div>;
};

export default Page;
