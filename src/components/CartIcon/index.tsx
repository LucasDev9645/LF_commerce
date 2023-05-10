import { useContext } from "react";

import cartIcon from "../../assets/img/Vector.svg";
import { ContextCartCount } from "../../utils/context-cart";

import "./style.css";

const CartIcon = () => {
  const { contextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />

      {contextCartCount > 0 && (
        <div className="dsc-cart-count">{contextCartCount}</div>
      )}
    </>
  );
};

export default CartIcon;
