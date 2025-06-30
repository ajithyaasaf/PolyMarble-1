import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className = "" }: LayoutProps): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Navigation />
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};