'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if the code is running in the browser only tp prevent errors during server-side rendering
    if (typeof window !== 'undefined') {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(savedCart);
    }
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: Math.max(1, item.quantity + quantity) };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-center md:items-start border rounded-lg p-4 shadow-lg"
              >
                <Image
                  src={`/${item.urlname}.webp`}
                  alt={item.name}
                  width={200}
                  height={300}
                  className="rounded"
                />
                <div className="md:ml-4 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-lg font-bold mt-2">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 bg-gray-300 text-gray-700 rounded-l hover:bg-gray-400"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      readOnly
                      value={item.quantity}
                      className="w-16 p-2 border text-center"
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 bg-gray-300 text-gray-700 rounded-r hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <span className="text-xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
