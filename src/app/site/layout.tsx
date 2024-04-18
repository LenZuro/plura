import { neobrutalism } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import Nav from "@/components/site/Nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Nav />
      {children}
    </main>
  );
};

export default layout;
