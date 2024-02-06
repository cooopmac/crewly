import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import { IconWrapper } from "./IconWrapper";
import { TbHome, TbUsersGroup } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex justify-center">
      <Listbox className="pt-8 px-4" aria-label="Sidebar">
        <ListboxItem
          key="home"
          startContent={
            <Link href="/home">
              <IconWrapper className="bg-success/10 text-success">
                <TbHome />
              </IconWrapper>
            </Link>
          }
        >
          <Link
            href="/home"
            className={`${
              isActive("/home") ? "transition underline underline-offset-4" : ""
            }`}
          >
            Dashboard
          </Link>
        </ListboxItem>
        <ListboxItem
          key="crews"
          startContent={
            <Link href="/crews">
              <IconWrapper className="bg-primary/10 text-primary">
                <TbUsersGroup />
              </IconWrapper>
            </Link>
          }
        >
          <Link
            href="/crews"
            className={`${
              isActive("/crews")
                ? "transition underline underline-offset-4"
                : ""
            }`}
          >
            Crews
          </Link>
        </ListboxItem>
        <ListboxItem
          key="clients"
          startContent={
            <Link href="/clients">
              <IconWrapper className="bg-secondary/10 text-secondary">
                <FaRegHandshake />
              </IconWrapper>
            </Link>
          }
        >
          <Link
            href="/clients"
            className={`${
              isActive("/clients")
                ? "transition underline underline-offset-4"
                : ""
            }`}
          >
            Clients
          </Link>
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default Sidebar;
