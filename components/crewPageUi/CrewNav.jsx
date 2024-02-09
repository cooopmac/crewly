import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import CreateCrewModal from "./CreateCrewModal";
import CrewSearch from "./CrewSearch";

const CrewNav = () => {
  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <p className="hidden sm:block font-bold text-inherit">Your Crews</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <NavbarItem justify="end">
            <CreateCrewModal />
          </NavbarItem>
          <CrewSearch />
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default CrewNav;
