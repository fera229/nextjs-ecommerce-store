import pkg from 'pg';
import { productsBooks } from './database/books.js';

const { Client } = pkg;

const client = new Client({
  user: 'next_js_ecom_store',
  host: 'localhost',
  database: 'next_js_ecom_store',
  password: 'next_js_ecom_store',
  port: 5432,
});

// Function to seed products
const seedProducts = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');

    for (const product of productsBooks) {
      await client.query(
        'INSERT INTO products (name, image, price, description) VALUES ($1, $2, $3, $4)',
        [product.name, product.image, product.price, product.description],
      );
    }

    console.log('Products have been seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await client.end();
    console.log('Disconnected from the database');
  }
};

// Run the seed function
seedProducts();
