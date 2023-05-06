import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardProduct from "../../components/CardProduct";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";

import "./style.css";

const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => setProduct(response.data))
      .catch((error) => console.log("ERRO", error));
  }, []);

  return <div>{product && <CardProduct product={product} />}</div>;
};

export default ProductDetails;
