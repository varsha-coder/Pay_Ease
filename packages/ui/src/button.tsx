"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-#0d241c hover:bg-[#0d2e22]  focus:outline-none focus:ring-1  font-medium rounded-lg text-md  p-4 px-12 me-2 mb-2">
      {children}
    </button>

  );
};
