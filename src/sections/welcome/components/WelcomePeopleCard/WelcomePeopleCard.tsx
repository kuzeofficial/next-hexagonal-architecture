import { People } from "@/modules/welcome/domain/People";
import Image from "next/image";

const WelcomePeopleCard = ({ people }: { people: People }) => {
  return (
    <div className="pb-3 bg-gray-500 rounded-lg ">
      <Image
        src={people.imageUrl}
        alt={people.name + "-image"}
        width={200}
        height={200}
        className="rounded-t-lg object-cover w-full max-h-[200px]"
      />

      <h3 className="px-4 pt-2 text-gray-300">{people.name}</h3>
    </div>
  );
};

export default WelcomePeopleCard;
