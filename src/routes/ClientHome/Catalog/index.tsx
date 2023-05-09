import { useEffect, useState } from "react";

import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

import "./styles.css";

type QueryParams = {
  page: number;
  name: string;
};

const Catalog = () => {
  const [isLastPage, setIsLastPage] = useState(false);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [queryparam, setQueryParam] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryparam.page, queryparam.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      })
      .catch((error) => console.log("ERRO", error));
  }, [queryparam]);

  const handleSearch = (searchText: string) => {
    setProducts([]);
    setQueryParam({ ...queryparam, page: 0, name: searchText });
  };

  const handleNextPageClick = () => {
    setQueryParam({ ...queryparam, page: queryparam.page + 1 });
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
        {!isLastPage && (
          <div onClick={handleNextPageClick}>
            <ButtonNextPage />
          </div>
        )}
      </section>
    </main>
  );
};

export default Catalog;
