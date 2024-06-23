import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(255) NOT NULL,
      image varchar(255),
      price numeric(10, 2) NOT NULL,
      description text,
      urlname varchar(255),
      author varchar(255)
    );
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
