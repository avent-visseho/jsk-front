"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  redirect("/blog");
};

export default Page;
