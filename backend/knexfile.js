module.exports = {
    test: {
      client: 'pg',
      connection: 'postgres://localhost/test_db',
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/test'
      }
    },
    development: {
      client: 'pg',
      connection: {
      host : 'localhost',
      user : 'postgres',
      password : '0000',
      database : 'nodejs_angular'
    },
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/development'
      }
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/production'
      }
    }
  }