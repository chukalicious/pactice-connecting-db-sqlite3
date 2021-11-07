// Update with your config settings.

module.exports = {
  development: {
    //will be changing this to postgres
    client: "sqlite3",
    //this is for a specific error that happens in sqlite
    useNullAsDefault: true,
    connection: {
      //this is for the location and name of the database
      filename: "./data/users.db3",
    },
    migrations: {
      // location of migrations for the database
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
