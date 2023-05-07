import computer from "../../../assets/img/computer.png";

import "./style.css";

const cart = {
  items: [
    {
      productId: 4,
      quantity: 1,
      name: "The Lord of the Rings",
      price: 90.5,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
    },
    {
      productId: 5,
      quantity: 2,
      name: "Smart TV",
      price: 2190.0,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    },
  ],
};

const Cart = () => {
  return (
    <main>
      <section id="cart-container-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          {cart.items.map((product) => (
            <div
              key={product.productId}
              className="dsc-cart-item-container dsc-line-bottom"
            >
              <div className="dsc-cart-item-left">
                <img src={product.imgUrl} alt="Computador" />
                <div className="dsc-cart-item-description">
                  <h3>{product.name}</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <div className="dsc-cart-item-quantity-btn">-</div>
                    <p>{product.quantity}</p>
                    <div className="dsc-cart-item-quantity-btn">+</div>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">{product.price}</div>
            </div>
          ))}
          <div className="dsc-cart-total-container">
            <h3>R$ 15000,00</h3>
          </div>
        </div>
        <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-btn-blue">Finalizar pedido</div>
          <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
