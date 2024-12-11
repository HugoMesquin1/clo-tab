import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST, // Lê diretamente do .env
    port: parseInt(process.env.POSTGRES_PORT, 10), // Converte a porta para número
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query,
};
