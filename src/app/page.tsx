"use client";
import { WelcomePeopleCreate } from "@/sections/welcome/components/WelcomePeopleCreate";
import { WelcomePeopleList } from "@/sections/welcome/components/WelcomePeopleList";
import { WelcomeContextProvider } from "@/sections/welcome/context";
import { createLocalStoragePeopleRepository } from "@/modules/welcome/infrastructure/LocalStoragePeopleRepository";

export default function Home() {
  const repository = createLocalStoragePeopleRepository();

  return (
    <WelcomeContextProvider repository={repository}>
      <h1 className="text-gray-100 text-4xl">
        ✨ NextJS Hexagonal Architecture Template🔯
      </h1>
      <p className="text-gray-400 mt-4 text-md">
        Thanks for using this template 🖤
      </p>
      <WelcomePeopleList />
      <WelcomePeopleCreate />
    </WelcomeContextProvider>
  );
}
