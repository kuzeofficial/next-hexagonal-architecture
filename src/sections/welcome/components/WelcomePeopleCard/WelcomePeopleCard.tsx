import { People } from "@/modules/welcome/domain/People";
import Image from "next/image";

const WelcomePeopleCard = ({ people }: { people: People }) => {
  return (
    <div>
      <Image src={people.imageUrl} alt={people.name} width="200" height="200" />
      <h3>{people.name}</h3>
    </div>
  );
};

export default WelcomePeopleCard;
