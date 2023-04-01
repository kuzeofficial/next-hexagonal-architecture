import { usePeopleContext } from "../../context";
import { WelcomePeopleCard } from "../WelcomePeopleCard";

const WelcomePeopleList = () => {
  const { peoples } = usePeopleContext();
  return (
    <section>
      {peoples.map((people) => (
        <div key={people.id}>
          <WelcomePeopleCard people={people} />
        </div>
      ))}
    </section>
  );
};

export default WelcomePeopleList;
