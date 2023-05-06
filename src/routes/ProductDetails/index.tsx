import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardProduct from "../../components/CardProduct";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";

import imgError from "../../assets/img/6402159-computador-com-lupa-estilo-plano-icone-de-pesquisa-erro-vetor.jpg";

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

  return (
    <div>
      {product ? (
        <CardProduct product={product} />
      ) : (
        <div className="container-error">
          <div>
            <h2>Produto não Encontrado!</h2>
            <img src={imgError} alt="imagem erro" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
