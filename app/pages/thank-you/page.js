const ThankYouPage = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Thank you for your order!</h1>
      <p>
        Your order has been placed successfully. You will receive a confirmation
        email shortly.
      </p>
      <div className="mt-4">
        <a
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
