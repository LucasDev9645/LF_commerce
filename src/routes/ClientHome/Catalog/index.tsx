import { useEffect, useState } from "react";

import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

import "./styles.css";

const Catalog = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [producName, setProductName] = useState("");

  useEffect(() => {
    productService
      .findPageRequest(0, producName)
      .then((response) => setProducts(response.data.content))
      .catch((error) => console.log("ERRO", error));
  }, [producName]);

  const handleSearch = (searchText: string) => {
    setProductName(searchText);
  };

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />
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
