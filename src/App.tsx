import { BrowserRouter, Route, Routes } from "react-router-dom";

import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ProductDetails";
import ClientHome from "./routes/ClientHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="product-details/:productId"
            element={<ProductDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
