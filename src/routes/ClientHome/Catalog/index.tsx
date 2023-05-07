import { useEffect, useState } from "react";

import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

import "./styles.css";
import { CategoryDTO } from "../../../models/category";

const Catalog = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const objTest: CategoryDTO = {
    id: 4,
    name: "Computador",
  };

  useEffect(() => {
    // localStorage.setItem("categoria", JSON.stringify(objTest));
    const obj = JSON.parse(localStorage.getItem("categoria") || "{}");
    console.log(obj);

    productService
      .findAll()
      .then((response) => setProducts(response.data.content))
      .catch((error) => console.log("ERRO", error));
  }, []);

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
};

export default Catalog;
