import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export function UseCart() {
  const context = useContext(CartContext);
  return context;
}
