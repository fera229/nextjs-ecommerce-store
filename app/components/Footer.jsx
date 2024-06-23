import Link from 'next/link';

const getDate = new Date();

const currentYear = getDate.getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} LitSpot. All rights reserved.</p>
        <nav className="mt-2">
          <Link href="/" className="mx-2">
            Home
          </Link>
          <Link href="/about" className="mx-2">
            About
          </Link>
          <Link href="/contact" className="mx-2">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
