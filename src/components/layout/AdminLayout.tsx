import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Khu vực nội dung chính */}
      <div className="flex-1 ml-64"> {/* ml-64 nếu Sidebar rộng 16rem = 256px */}
        <Topbar />

        {/* Nội dung trang con sẽ hiển thị ở đây */}
        <div className="p-4 mt-16"> {/* mt-16 nếu Topbar cao 64px */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
