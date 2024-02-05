"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useUser } from "@auth0/nextjs-auth0/client";

const Nav = () => {
  const { user } = useUser();
  console.log(user?.picture);
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">crewly.</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        {!user && (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/api/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/api/auth/signup"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
        {user && (
          <>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar src={user?.picture!} size="md"></Avatar>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                disabledKeys={["email"]}
              >
                <DropdownItem key="email" isReadOnly className="opacity-100">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="logout">
                  <Link href="/api/auth/logout">Logout</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        )}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
