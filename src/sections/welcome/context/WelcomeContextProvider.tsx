"use client";
import { createPeople } from "@/modules/welcome/application/create/createPeople";
import { getAllPeople } from "@/modules/welcome/application/get-all/getAllPeople";
import { v4 as uuidv4 } from "uuid";
import { People } from "@/modules/welcome/domain/People";
import { PeopleRepository } from "@/modules/welcome/domain/PeopleRepository";
import React, { useContext, useEffect } from "react";

type ContextState = {
  peoples: People[];
  createPeople: (people: People) => void;
};
export const WelcomeContext = React.createContext({} as ContextState);

export const WelcomeContextProvider = ({
  children,
  repository,
}: React.PropsWithChildren<{ repository: PeopleRepository }>) => {
  const [peoples, setPeoples] = React.useState<People[]>([]);

  const create = (people: People) => {
    const id = (uuidv4 as () => string)();

    createPeople(repository, {
      id,
      name: people.name,
      imageUrl: people.imageUrl,
    });
    getAllPeoples();
  };

  const getAllPeoples = () => {
    const peoples = getAllPeople(repository);
    setPeoples(peoples);
  };

  useEffect(() => {
    getAllPeoples();
  }, []);

  return (
    <WelcomeContext.Provider value={{ peoples, createPeople: create }}>
      {children}
    </WelcomeContext.Provider>
  );
};

export const usePeopleContext = () => useContext(WelcomeContext);
