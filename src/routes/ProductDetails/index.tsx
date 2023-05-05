import { useParams } from "react-router-dom";

import CardProduct from "../../components/CardProduct";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";

import "./style.css";

const ProductDetails = () => {
  const params = useParams();

  const product = productService.findById(Number(params.productId));

  return <div>{product && <CardProduct product={product} />}</div>;
};

export default ProductDetails;
