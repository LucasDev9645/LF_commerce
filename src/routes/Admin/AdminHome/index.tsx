import { useState, useEffect } from "react";

import { userDTO } from "../../../models/user";
import * as userService from "../../../services/user-service";

import "./style.css";

const AdminHome = () => {
  const [user, setUser] = useState<userDTO>();

  useEffect(() => {
    userService.findMe(2).then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <main>
        <section id="admin-home-section" className="dsc-container">
          <h2 className="dsc-section-title dsc-mb20">
            Bem-vindo a área administrativa {user?.firstName}
          </h2>
        </section>
      </main>
    </div>
  );
};

export default AdminHome;
