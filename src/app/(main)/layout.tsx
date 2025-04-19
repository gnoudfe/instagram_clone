import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { getUserInfor } from "@/services/apiServer/userService";
import { UserDataResponse } from "@/types/users";
import React from "react";

const MainLayout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const userInfordata: UserDataResponse = await getUserInfor();
  return (
    <div className="w-full flex">
      <Sidebar userData={userInfordata?.user} />
      {children}
    </div>
  );
};

export default MainLayout;
