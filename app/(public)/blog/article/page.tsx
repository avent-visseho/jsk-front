"use client";
import { useSearchParams, useRouter, redirect } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("q") ?? "";
  const title = searchParams.get("title") ?? "";
  const router = useRouter();

  useEffect(() => {
    if (title && id) {
      router.replace("/blog/article/" + title + "/" + id);
    } else {
      return router.replace("/blog");
    }
  }, []);

  if (!title) redirect("/blog");
;
  return <div></div>;
};

export default Page;
