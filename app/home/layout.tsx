"use client";

import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Spinner } from "@nextui-org/react";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ height: "100vh" }}
      >
        <Spinner size="lg"></Spinner>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Nav component at the top */}
      <Nav />

      {/* Flex container for sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with full height */}
        <div className="w-48 bg-primary rounded-xl m-2 ">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
