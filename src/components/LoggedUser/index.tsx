import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authService from "../../services/auth-service";
import { ContextToken } from "../../utils/context-token";

const LoggedUser = () => {
  const { contextTokenPayload, setContextTokenPayload } =
    useContext(ContextToken);

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    authService.logout();
    navigate("/login");
    setContextTokenPayload(undefined);
  };

  return contextTokenPayload && authService.isAuthenticated() ? (
    <div className="dsc-logged-user">
      <p>{contextTokenPayload.user_name}</p>
      <span onClick={handleLogoutClick}>Sair</span>
    </div>
  ) : (
    <Link to="/login">Entrar</Link>
  );
};

export default LoggedUser;
