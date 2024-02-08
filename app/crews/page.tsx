import CrewNav from "@/components/crewPageUi/CrewNav.jsx";
import CrewCard from "@/components/crewPageUi/CrewCard.jsx";

const Page = () => {
  const crews = [
    {
      title: "Grass Crew",
      members: 3,
      membersNames: ["Cooper", "Joe", "Nathan"],
    },
    {
      title: "Garden Crew",
      members: 10,
      membersNames: ["Cooper", "Alexandria", "Nathan", "Leslie"],
    },
    {
      title: "Landscape Guys",
      members: 3,
      membersNames: ["Cooper", "Joe", "Nathan", "Jon"],
    },
    {
      title: "Landscape Guys",
      members: 3,
      membersNames: ["Cooper", "Joe", "Nathan", "Jon"],
    },
    {
      title: "Landscape Guys",
      members: 3,
      membersNames: ["Cooper", "Joe", "Nathan", "Jon"],
    },
    {
      title: "Landscape Guys",
      members: 3,
      membersNames: ["Cooper", "Joe", "Nathan", "Jon"],
    },
    {
      title: "Landscape Guys",
      members: 3,
      membersNames: ["Cooper", "Joe", "Nathan", "Jon"],
    },
    {
      title: "Landscape Guys",
      members: 3,
      membersNames: ["Cooper", "Joe", "Nathan", "Jon"],
    },
  ];
  return (
    <div>
      <CrewNav />
      <div className="flex flex-wrap">
        {crews.map((crew, index) => (
          <CrewCard
            key={index}
            title={crew.title}
            members={crew.members}
            membersNames={crew.membersNames}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
