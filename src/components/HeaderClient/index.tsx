import { Link } from "react-router-dom";

import CartIcon from "../CartIcon";

import "./styles.css";

const HeaderClient = () => {
  return (
    <div>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <Link to="/">
            <h1>LFcommerce</h1>
          </Link>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <Link to="/cart">
                <div className="dsc-menu-item">
                  <CartIcon />
                </div>
              </Link>
            </div>
            <Link to="/login">Entrar</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderClient;
