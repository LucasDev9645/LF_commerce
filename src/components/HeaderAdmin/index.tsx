import homeIcon from "../../assets/img/home-svgrepo-com 1.svg";
import stockIcon from "../../assets/img/stock-svgrepo-com 1.svg";

import "./styles.css";

const HeaderAdmin = () => {
  return (
    <div>
      <header className="dsc-header-admin">
        <nav className="dsc-container">
          <h1>LFC Admin</h1>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <div className="dsc-menu-item">
                <img src={homeIcon} alt="Início" />
                <p>Início</p>
              </div>
              <div className="dsc-menu-item">
                <img src={stockIcon} alt="Cadastro de produtos" />
                <p className="dsc-menu-item-active">Produtos</p>
              </div>
            </div>
            <div className="dsc-logged-user">
              <p>Maria Silva</p>
              <a href="#">Sair</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderAdmin;
