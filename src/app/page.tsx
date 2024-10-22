"use client";
import React, { useMemo } from "react";
import { WelcomePeopleCreate } from "@/sections/welcome/components/WelcomePeopleCreate";
import { WelcomePeopleList } from "@/sections/welcome/components/WelcomePeopleList";
import { WelcomeContextProvider } from "@/sections/welcome/context";
import { createLocalStoragePeopleRepository } from "@/modules/welcome/infrastructure/LocalStoragePeopleRepository";

export default function Home() {
  const repository = createLocalStoragePeopleRepository();

  // Memoize the WelcomePeopleList component
  const memoizedWelcomePeopleList = useMemo(() => <WelcomePeopleList />, [repository]);

  return (
    <WelcomeContextProvider repository={repository}>
      <h1 className="text-4xl text-gray-100">
        ✨ NextJS Hexagonal Architecture Template🔯
      </h1>
      <p className="mt-4 text-gray-400 text-md">
        Thanks for using this template 🖤
      </p>
      {memoizedWelcomePeopleList}
      <WelcomePeopleCreate />
    </WelcomeContextProvider>
  );
}
