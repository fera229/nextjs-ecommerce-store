'use client';

import { useState } from 'react';

const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id,
    );

    // increment the quantity of the product if it was already added to cart
    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      // if not, add a new product with the correspondingh quantity
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-16 p-2 border rounded"
        data-test-id="product-quantity"
      />
      <button
        onClick={addToCart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        data-test-id="product-add-to-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
