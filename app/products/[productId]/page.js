import { getBook } from '../../../database/books';
import AddToCart from '../../components/AddToCart.jsx';

export default async function BookPage({ params }) {
  const book = await getBook(parseInt(params.productId, 10));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{book.name}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={`/booksImgs/${book.urlname}.webp`}
          alt={book.name}
          width={300}
          height={200}
          className="mb-4 md:mr-6 rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-gray-700 mb-4 font-extrabold	">{book.name}</h2>
          <h3 className="text-gray-700 mb-4 font-bold">{book.author}</h3>

          <p className="text-gray-700 mb-4">{book.description}</p>
          <p className="text-lg font-bold mb-4">${book.price}</p>
          <AddToCart product={book} />
        </div>
      </div>
    </div>
  );
}
