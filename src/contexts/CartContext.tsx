"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Product, ProductCondition } from "@/data/siteContent";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCondition: ProductCondition;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, selectedCondition: ProductCondition, quantity?: number) => void;
  removeFromCart: (productId: string, condition: ProductCondition) => void;
  updateQuantity: (productId: string, condition: ProductCondition, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "revibe_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setItems(parsed);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, selectedCondition: ProductCondition, quantity = 1) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (item) => item.product.id === product.id && item.selectedCondition === selectedCondition
      );

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedCondition === selectedCondition
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, quantity, selectedCondition }];
    });
  };

  const removeFromCart = (productId: string, condition: ProductCondition) => {
    setItems((prev) => prev.filter(
      (item) => !(item.product.id === productId && item.selectedCondition === condition)
    ));
  };

  const updateQuantity = (productId: string, condition: ProductCondition, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, condition);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedCondition === condition
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}