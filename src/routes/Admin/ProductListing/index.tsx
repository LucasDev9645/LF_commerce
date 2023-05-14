import { useEffect, useState } from "react";

import iconEdit from "../../../assets/img/pen 1.svg";
import iconDelete from "../../../assets/img/trash 1.svg";

import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";

import { hasAnyRoles } from "../../../services/auth-service";
import * as productService from "../../../services/product-service";
import { ProductDTO } from "../../../models/product";

import "./styles.css";

type QueryParams = {
  page: number;
  name: string;
};

const ProductListing = () => {
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!",
  });

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    id: 0,
    message: "Tem Certeza que Deseja Deletar o Produto!",
  });

  const [queryparam, setQueryParam] = useState<QueryParams>({
    page: 0,
    name: "",
  });
  const [isLastPage, setIsLastPage] = useState(false);
  const [products, setProducts] = useState<ProductDTO[]>([]);

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

  const handleDialogInfoClose = () => {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  };

  const handleDeleteClick = (productId: number) => {
    setDialogConfirmationData({
      ...dialogConfirmationData,
      id: productId,
      visible: true,
    });
  };

  const handleDialogConfirmationAnswer = (
    answer: boolean,
    productId: number
  ) => {
    if (answer) {
      productService.deleteById(productId).then(() => {
        setProducts([]);
        setQueryParam({ ...queryparam, page: 0 });
      });
    }
    setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
  };

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="dsc-tb576">{product.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className="dsc-tb768">R$ {product.price}</td>
                <td className="dsc-txt-left">{product.name}</td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={iconEdit}
                    alt="Editar"
                  />
                </td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={iconDelete}
                    alt="Deletar"
                    onClick={() => handleDeleteClick(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLastPage && (
          <div onClick={handleNextPageClick}>
            <ButtonNextPage />
          </div>
        )}
      </section>
      {dialogInfoData.visible && (
        <DialogInfo
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose}
        />
      )}

      {dialogConfirmationData.visible && (
        <DialogConfirmation
          id={dialogConfirmationData.id}
          message={dialogConfirmationData.message}
          onDialogAnswer={handleDialogConfirmationAnswer}
        />
      )}
    </main>
  );
};

export default ProductListing;
