"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartPopup from "@/components/cart/CartPopup";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const { items } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Cart icon */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative p-2"
            aria-label={t("myCart")}
          >
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              {items.length}
            </span>
          </button>

          {/* Logo */}
          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight">
            <span className="text-gray-800">get</span>
            <span className="text-primary">your</span>
            <span className="text-gray-800">place</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2"
            aria-label="Menu"
          >
            {showMenu ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Cart popup */}
      {showCart && <CartPopup onClose={() => setShowCart(false)} />}

      {/* Mobile menu */}
      {showMenu && <MobileMenu onClose={() => setShowMenu(false)} />}
    </>
  );
}
