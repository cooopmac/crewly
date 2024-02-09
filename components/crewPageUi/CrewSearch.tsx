import { Input } from "@nextui-org/react";
import React from "react";
import { TbSearch } from "react-icons/tb";

const CrewSearch = () => {
  return (
    <Input
      classNames={{
        base: "max-w-full sm:max-w-[10rem] h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Search Crews..."
      size="sm"
      startContent={<TbSearch size={18} />}
      type="search"
    />
  );
};

export default CrewSearch;
