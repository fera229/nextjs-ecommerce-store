import Image from 'next/image';
import Link from 'next/link';
import { getBooksInsecure } from '../database/books';

export const metadata = {
  title: 'Home - LitSpot',
  description: 'Welcome to LitSpot, your ultimate destination for books.',
};

export default async function HomePage() {
  const books = await getBooksInsecure();

  const featuredBooks = books.slice(0, 4);
  const newArrivals = books.slice(4, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-4 flex-grow">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="relative h-64  text-black flex items-center justify-center w-full border rounded-lg p-4 shadow-lg">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Welcome to LitSpot</h1>
              <p className="text-xl mt-2">
                {' '}
                Discover your next favorite book at LitSpot, where stories come
                alive. Explore our collection and find the perfect read today.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <div
                key={`featured-${book.id}`}
                className="border rounded-lg p-4 shadow-lg"
              >
                <Link href={`/products/${book.id}`}>
                  <div className="cursor-pointer">
                    <Image
                      src={`/${book.urlname}.webp`}
                      alt={book.name}
                      width={200}
                      height={300}
                      className="rounded"
                    />
                    <h3 className="text-xl font-bold mt-2">{book.name}</h3>
                    <p className="text-gray-700 mt-1">{book.description}</p>
                    <p className="text-lg font-bold mt-1">${book.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((book) => (
              <div
                key={`new-${book.id}`}
                className="border rounded-lg p-4 shadow-lg"
              >
                <Link href={`/products/${book.id}`}>
                  <div className="cursor-pointer">
                    <Image
                      src={`/${book.urlname}.webp`}
                      alt={book.name}
                      width={200}
                      height={300}
                      className="rounded"
                    />
                    <h3 className="text-xl font-bold mt-2">{book.name}</h3>
                    <p className="text-gray-700 mt-1">{book.description}</p>
                    <p className="text-lg font-bold mt-1">${book.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 shadow-lg">
              <p className="text-gray-700">
                "Great selection and fast delivery!"
              </p>
              <p className="text-right text-gray-500">- Jean-Luc Picard</p>
            </div>
            <div className="border rounded-lg p-4 shadow-lg">
              <p className="text-gray-700">
                "I found exactly what I was looking for."
              </p>
              <p className="text-right text-gray-500">- Tyler Durden</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <form className="flex flex-col items-start space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border rounded w-full"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
