import { Sql } from 'postgres';

export const books = [
  {
    name: 'To Kill a Mockingbird',
    urlName: 'to_kill_a_mocking_bird',
    image: '/public/booksImgs/to_kill_a_mocking_bird.webp',
    price: 18.99,
    description:
      'A novel by Harper Lee published in 1960. Instantly successful, it has become a classic of modern American literature.',
    author: 'Harper Lee',
  },
  {
    name: '1984',
    urlName: '1984',
    image:
      '/Users/ferasnasr/Web-dev24/Projects/nextjs-ecommerce-store/public/booksImgs/1984.webp',
    price: 15.99,
    description:
      'A dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.',
    author: 'George Orwell',
  },
  {
    name: 'The Great Gatsby',
    urlName: 'Great_Gatsby',
    image: '/public/booksImgs/Great_Gatsby.webp',
    price: 10.99,
    description:
      'A 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg.',
    author: 'F. Scott Fitzgerald',
  },
  {
    name: 'As I Lay Dying',
    urlName: 'As_I_Lay_Dying',
    image: '/public/booksImgs/As_I_Lay_Dying.webp',
    price: 12.99,
    description:
      'A 1930 Southern Gothic novel by American author William Faulkner. The book uses multiple narrators to tell the story of the Bundren family.',
    author: 'William Faulkner',
  },
  {
    name: 'The Tunnel',
    urlName: 'Sabato_El_Tunel',
    image: '/public/booksImgs/Sabato_El_Tunel.webp',
    price: 14.99,
    description:
      'A novel by Argentine writer Ernesto Sabato, first published in 1948. It is a psychological novel that tells the story of the painter Juan Pablo Castel.',
    author: 'Ernesto Sabato',
  },
  {
    name: 'In Search of Lost Time',
    urlName: 'Lost_Time_Volumes_1-7-8',
    image: '/public/booksImgs/Lost_Time_Volumes_1-7-8.webp',
    price: 150.0,
    description:
      'A novel in seven volumes by Marcel Proust. It is known for its theme of involuntary memory, the most famous example being the "episode of the madeleine."',
    author: 'Marcel Proust',
  },
  {
    name: 'Moby-Dick',
    urlName: 'Moby_Dick',
    image: '/public/booksImgs/Moby_Dick.webp',
    price: 11.99,
    description:
      'An 1851 novel by Herman Melville. The story tells the adventures of wandering sailor Ishmael, and his voyage on the whaleship Pequod.',
    author: 'Herman Melville',
  },
  {
    name: 'War and Peace',
    urlName: 'War_and_Peace',
    image: '/public/booksImgs/public/booksImgs/War_and_Peace.webp',
    price: 20.99,
    description:
      'A novel by Leo Tolstoy, first published from 1865 to 1869, which tells the story of Russian society during the Napoleonic Era.',
    author: 'Leo Tolstoy',
  },
  {
    name: 'The Odyssey',
    urlName: 'Homer_Odyssey',
    image: '/public/booksImgs/public/booksImgs/Homer_Odyssey.webp',
    price: 17.99,
    description:
      'An ancient Greek epic poem attributed to Homer, describing the journey of Odysseus as he returns home from the Trojan War.',
    author: 'Homer',
  },
  {
    name: 'The Brothers Karamazov',
    urlName: 'Brothers_Karamazov',
    image: '/public/booksImgs/Brothers_Karamazov.webp',
    price: 19.99,
    description:
      'A novel by the Russian author Fyodor Dostoevsky, first published in 1880. It is a passionate philosophical novel that enters deeply into the ethical debates of God, free will, and morality.',
    author: 'Fyodor Dostoevsky',
  },
  {
    name: 'Nausea',
    urlName: 'Nausea_sartre',
    image: '/public/booksImgs/Nausea_sartre.webp',
    price: 13.99,
    description:
      "A philosophical novel by Jean-Paul Sartre, published in 1938. It is Sartre's first novel and, in his own opinion, one of his best works.",
    author: 'Jean-Paul Sartre',
  },
  {
    name: 'The Myth of Sisyphus',
    urlName: 'Camus_Sysyphus',
    image: '/public/booksImgs/Camus_Sysyphus.webp',
    price: 11.99,
    description:
      "A philosophical essay by Albert Camus. It was published in 1942 in French as Le Mythe de Sisyphe. The English translation by Justin O'Brien was first published in 1955.",
    author: 'Albert Camus',
  },
];

export async function up(sql: Sql) {
  for (const book of books) {
    await sql`
      INSERT INTO
        products (
          name,
          image,
          price,
          description,
          urlname,
          author
        )
      VALUES
        (
          ${book.name},
          ${book.image},
          ${book.price},
          ${book.description},
          ${book.urlName},
          ${book.author}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const book of books) {
    await sql`
      DELETE FROM products
      WHERE
        -- should be id !!!
        name = ${book.name}
    `;
  }
}
