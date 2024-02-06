import React, { ReactNode } from "react";
import { cn } from "@nextui-org/react";

interface Props {
  children: ReactNode;
  className: any;
}

export const IconWrapper = ({ children, className }: Props) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-9 h-9"
    )}
  >
    {children}
  </div>
);
