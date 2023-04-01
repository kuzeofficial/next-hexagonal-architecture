"use client";
import { People } from "@/modules/welcome/domain/People";
import { useFormPeople } from "@/sections/welcome/hooks/useFormPeople";

const WelcomePeopleCreate = () => {
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
      className="mt-8 gap-2 justify-center flex sm:flex-row flex-col"
    >
      <input
        className="ring-2 focus:border-none appearance-none bg-transparent  leading-tight focus:outline-none text-white border-blue-300 px-2 py-1 rounded-md"
        {...register("name")}
        placeholder="Cristian Fonseca"
      />
      <span role="alert" className="text-red-400 mt-1">
        {errors?.name?.message as string}
      </span>
      <input
        className="ring-2 focus:border-none appearance-none bg-transparent  leading-tight focus:outline-none text-white border-blue-300 px-2 py-1 rounded-md"
        {...register("imageUrl")}
        placeholder="Image URL"
      />
      <span role="alert" className="text-red-400 mt-1">
        {errors?.imageUrl?.message as string}
      </span>

      <button
        className="px-4 hover:bg-slate-300 duration-200 transition-all bg-slate-200 rounded-md border-2"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default WelcomePeopleCreate;
