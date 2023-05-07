import { Link, useNavigate } from "react-router-dom";

import CategoryProduct from "../CategoryProduct";
import ButtonPrimary from "../ButtonPrimary";
import ButtonInverse from "../ButtonInverse";
import { ProductDTO } from "../../models/product";
import * as cartService from "../../services/cart-service";

import "./styles.css";

type Props = {
  product: ProductDTO;
};

const CardProduct = ({ product }: Props) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    cartService.addProduct(product);
    navigate("/cart");
  };

  return (
    <>
      <section id="product-details-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          <div className="dsc-product-details-top dsc-line-bottom">
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className="dsc-product-details-bottom">
            <h3>{product.price}</h3>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="dsc-category-container">
              {product.categories.map((item) => (
                <CategoryProduct key={item.id} name={item.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick}>
            <ButtonPrimary name="Comprar" />
          </div>
          <Link to="/">
            <ButtonInverse name="Inicio" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CardProduct;
