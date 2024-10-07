import React from "react";
import { NavLink } from "react-router-dom";

const CartIcon = ({ cartCount }) => {
  return (
    <NavLink to="/cart-items" className="relative">
      <span className="text-2xl sm:text-3xl">🛒</span>
      <span className="absolute top-0 right-0 bg-red-600 text-white text-xs sm:text-sm rounded-full h-5 sm:h-6 w-5 sm:w-6 flex items-center justify-center">
        {cartCount}
      </span>
    </NavLink>
  );
};

export default CartIcon;
