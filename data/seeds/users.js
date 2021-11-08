exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("users")
      // run truncate instead of delete in order to not reuse id's
      .truncate()
      .then(function () {
        // Inserts seed entries
        return knex("users").insert([
          { id: 1, username: "Bandit", password: "123456", role: "pet" },
          { id: 2, username: "Hughie", password: "123456", role: "pet" },
          { id: 3, username: "Alvaro", password: "123456", role: "owner" },
        ]);
      })
  );
};
