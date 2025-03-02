import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
