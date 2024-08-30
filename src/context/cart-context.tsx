import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/home/components/coffee-card";
import { produce } from "immer";
import { ECart } from "../enum/cart.enum";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: ECart) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  readonly children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffee-delivery:cart-items";

export const CartContext = createContext({} as CartContextType);

export function CartContextprovider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemTotal = cartItems.reduce((total, carItem) => {
    return total + carItem.price * carItem.quantity;
  }, 0);

  const addCoffeeToCart = (coffee: CartItem) => {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  };

  const cleanCart = () => {
    setCartItems([]);
  };

  const changeCartItemQuantity = (
    cartItemId: number,
    type: ECart.button_increase | ECart.button_decrease
  ) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        item.quantity =
          type === ECart.button_increase
            ? item.quantity + 1
            : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  };

  const removeCartItem = (cartItemId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });
    setCartItems(newCart);
  };

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cartItemTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
