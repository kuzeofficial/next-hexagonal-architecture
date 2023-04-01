import { usePeopleContext } from "../../context";
import { WelcomePeopleCard } from "../WelcomePeopleCard";

const WelcomePeopleList = () => {
  const { peoples } = usePeopleContext();
  return (
    <section className="justify-center mt-4 flex gap-5 sm:flex-row flex-col">
      {peoples.map((people) => (
        <WelcomePeopleCard key={people.id} people={people} />
      ))}
    </section>
  );
};

export default WelcomePeopleList;
