import { Header } from "@/components";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div>
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
);
