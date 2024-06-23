'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  // const [quantity, setQuantity] = useState(0);

  // setInterval(() => {
  //   const cart = localStorage.getItem('cart');

  //   if (cart) {
  //     // console.log('cart from Local storage', cart);

  //     setQuantity(JSON.parse(cart)[0].quantity);
  //   }
  // }, 1000);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white fixed w-full z-10">
      <h1 className="text-2xl">LitSpot</h1>
      <nav className="flex space-x-4">
        <Link href="/">
          <span className="cursor-pointer">Home</span>
        </Link>
        <Link href="/products">
          <span className="cursor-pointer">Products</span>
        </Link>
        <Link href="/pages/about">
          <span className="cursor-pointer">About</span>
        </Link>
        <Link href="/pages/contact">
          <span className="cursor-pointer">Contact</span>
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/pages/cart" className="relative">
          <span className="material-icons">Cart (quantity)</span>
        </Link>
        <Link href="/pages/checkout" className="hover:underline">
          Checkout
        </Link>
      </div>
    </header>
  );
};

export default Header;
