export const configuration = () => ({
  PORT: parseInt(process.env.PORT, 10) || 8080,
  URL_API: process.env.URL_API,
  DATABASE: {
    HOST: process.env.DATABASE_HOST,
    PORT: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    USERNAME: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
  },
});
