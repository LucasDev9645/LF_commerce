import { Outlet } from "react-router-dom";

import HeaderAdmin from "../../components/HeaderAdmin";

const Admin = () => {
  return (
    <div>
      <HeaderAdmin />
      <Outlet />
    </div>
  );
};

export default Admin;
