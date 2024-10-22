"use client";
import React from "react";
import { People } from "@/modules/welcome/domain/People";
import { useFormPeople } from "@/sections/welcome/hooks/useFormPeople";

const WelcomePeopleCreate = React.memo(() => {
  const { register, handleSubmit, errors, reset, createPeople } =
    useFormPeople();

  function onSubmit(data: People) {
    try {
      createPeople(data);
    } catch (error) {
      console.log(error);
    }
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-2 mt-8 sm:flex-row"
    >
      <div className="flex flex-col py-1">
        <input
          role="textbox"
          className="px-2 py-1 leading-tight text-white bg-transparent border-blue-300 rounded-md appearance-none ring-2 focus:border-none focus:outline-none"
          {...register("name")}
          placeholder="Cristian Fonseca"
        />
        <span role="alert" className="text-red-400">
          {errors?.name?.message as string}
        </span>
      </div>
      <div className="flex flex-col py-1">
        <input
          role="textbox"
          className="px-2 py-1 leading-tight text-white bg-transparent border-blue-300 rounded-md appearance-none ring-2 focus:border-none focus:outline-none"
          {...register("imageUrl")}
          placeholder="Image URL"
        />
        <span role="alert" className="text-red-400">
          {errors?.imageUrl?.message as string}
        </span>
      </div>
      <button
        role="button"
        className="px-4 max-h-[32px] mt-0.5 hover:bg-slate-300 duration-200 transition-all bg-slate-200 rounded-md "
        type="submit"
      >
        Save
      </button>
    </form>
  );
});

export default WelcomePeopleCreate;
