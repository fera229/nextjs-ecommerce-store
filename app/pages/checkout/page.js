'use client';

import { useState } from 'react';

const CheckoutPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    creditCard: '',
    expirationDate: '',
    securityCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the cart
    localStorage.removeItem('cart');
    // Redirect to thank you page
    window.location.href = '/pages/thank-you';
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(form).map((key) => (
          <div key={`key-${key}`} className="flex flex-col">
            <label className="text-sm font-semibold mb-1" htmlFor={key}>
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              id={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>
        ))}
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
