import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Badge,
  Chip,
  Avatar,
  Button,
} from "@nextui-org/react";
import { TbPlus } from "react-icons/tb";

const CrewCard = ({ title, members, membersNames }) => {
  console.log(membersNames);
  return (
    <>
      <Card className="py-4 m-4 min-w-56 max-w-64">
        <CardHeader className="pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{title}</p>
          <small className="text-default-500">{members} Members</small>
          <div className="pt-4">
            <Button startContent={<TbPlus />} color="primary">
              Add Member
            </Button>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible gap-4 grid grid-cols-2">
          {membersNames.map((memberName, index) => (
            <Chip
              className=""
              index={index}
              color="primary"
              variant="flat"
              avatar={
                <Avatar
                  name={memberName}
                  src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
                />
              }
            >
              {memberName}
            </Chip>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default CrewCard;
