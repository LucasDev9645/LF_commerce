import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from "../localstorage/cart-repository";
import { ProductDTO } from "../models/product";

export const saveCart = (cart: OrderDTO) => {
  cartRepository.save(cart);
};

export const getCart = (): OrderDTO => {
  return cartRepository.get();
};

export const addProduct = (product: ProductDTO) => {
  const cart = cartRepository.get();
  const item = cart.items.find((x) => x.productId === product.id);
  if (!item) {
    const newItem = new OrderItemDTO(
      product.id,
      1,
      product.name,
      product.price,
      product.imgUrl
    );
    cart.items.push(newItem);
    cartRepository.save(cart);
  }
};

export const clearCart = () => {
  cartRepository.clear();
};
