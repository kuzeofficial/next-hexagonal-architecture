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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Cristian Fonseca" />
      <span role="alert">{errors?.name?.message as string}</span>
      <input {...register("imageUrl")} placeholder="Image URL" />
      <span role="alert">{errors?.imageUrl?.message as string}</span>
      <button type="submit">Save</button>
    </form>
  );
};

export default WelcomePeopleCreate;
