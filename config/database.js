module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5437),
        database: env('DATABASE_NAME', 'podcastr-db'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'admin123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
