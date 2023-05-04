import { ProductDTO } from "../../models/product";

import "./styles.css";

type Props = {
  product: ProductDTO;
};

const CatalogCard = ({ product }: Props) => {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={product.imgUrl} alt="Computer" />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default CatalogCard;
