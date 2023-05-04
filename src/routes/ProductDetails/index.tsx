import CardProduct from "../../components/CardProduct";
import HeaderClient from "../../components/HeaderClient";
import { ProductDTO } from "../../models/product";

import "./style.css";

const product: ProductDTO = {
  id: 2,
  name: "Pc Gamer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  price: 5190.0,
  imgUrl: "https://m.media-amazon.com/images/I/610eucL6jjL._AC_.jpg",
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores Gamer",
    },
    {
      id: 4,
      name: "Premiun",
    },
  ],
};

const ProductDetails = () => {
  return (
    <>
      <HeaderClient />
      <CardProduct product={product} />
    </>
  );
};

export default ProductDetails;
