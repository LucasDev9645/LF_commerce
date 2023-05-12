import { Link } from "react-router-dom";
import { useContext } from "react";

import CartIcon from "../CartIcon";
import adminIcon from "../../assets/img/engine.svg";
import * as authService from "../../services/auth-service";
import { ContextToken } from "../../utils/context-token";
import LoggedUser from "../LoggedUser";

import "./styles.css";

const HeaderClient = () => {
  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <div>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <Link to="/">
            <h1>LFcommerce</h1>
          </Link>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              {contextTokenPayload &&
                authService.hasAnyRoles(["ROLE_ADMIN"]) && (
                  <Link to="/admin">
                    <div className="dsc-menu-item">
                      <img src={adminIcon} alt="admin" />
                    </div>
                  </Link>
                )}
              <Link to="/cart">
                <div className="dsc-menu-item">
                  <CartIcon />
                </div>
              </Link>
            </div>
            <LoggedUser />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderClient;
