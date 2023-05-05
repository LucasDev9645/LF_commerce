import { Link } from "react-router-dom";

import cartIcon from "../../assets/img/Vector.svg";

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
              <div className="dsc-menu-item">
                <Link to="/cart">
                  <img src={cartIcon} alt="Carrinho de compras" />
                </Link>
              </div>
            </div>
            <Link to="/login">Entrar</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderClient;
