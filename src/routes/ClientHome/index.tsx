import HeaderClient from "../../components/HeaderClient";

import { Outlet } from "react-router-dom";

const ClientHome = () => {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
};

export default ClientHome;
