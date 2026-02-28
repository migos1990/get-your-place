"use client";

import { create } from "zustand";
import { CartItem } from "@/lib/types";

const CART_TIMEOUT_MS = 20 * 60 * 1000; // 20 minutes

interface CartStore {
  items: CartItem[];
  expiresAt: number | null;
  addItem: (item: CartItem) => void;
  removeItem: (roomId: string) => void;
  clearCart: () => void;
  getTimeRemaining: () => number;
  isExpired: () => boolean;
  totalPrice: () => number;
  processingFee: () => number;
  grandTotal: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  expiresAt: null,

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
      expiresAt: state.expiresAt ?? Date.now() + CART_TIMEOUT_MS,
    })),

  removeItem: (roomId) =>
    set((state) => {
      const newItems = state.items.filter((i) => i.roomId !== roomId);
      return {
        items: newItems,
        expiresAt: newItems.length === 0 ? null : state.expiresAt,
      };
    }),

  clearCart: () => set({ items: [], expiresAt: null }),

  getTimeRemaining: () => {
    const { expiresAt } = get();
    if (!expiresAt) return CART_TIMEOUT_MS;
    return Math.max(0, expiresAt - Date.now());
  },

  isExpired: () => {
    const { expiresAt } = get();
    if (!expiresAt) return false;
    return Date.now() >= expiresAt;
  },

  totalPrice: () => get().items.reduce((sum, item) => sum + item.price, 0),

  processingFee: () => get().totalPrice() * 0.05,

  grandTotal: () => get().totalPrice() + get().processingFee(),
}));
