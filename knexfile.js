// Update with your config settings.

const localPG = {
  host: "localhost",
  database: "hobbits",
  user: "student",
  password: "hired"
};

const productionDbConnection = process.env.DATABASE_URL || localPG;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/users.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); //enforce FK
      }
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
  production: {
    client: "pg",
    connection: productionDbConnection, // could be an object or a string
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
