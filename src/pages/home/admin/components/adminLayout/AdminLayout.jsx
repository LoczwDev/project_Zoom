import React from "react";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* HeaderAdmin */}
      {/* <Header /> */}
      <main className="flex-1 p-4 lg:p-6 h-auto overflow-y-auto overflow-x-hidden dark:bg-base-100">
        <Outlet />
      </main>
    </div>
  );
};
