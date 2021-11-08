const db = require("../db-config");

module.exports = {
  // database function names (we know the nerd name foe this, we looked it up recently) to interact with the data
  find,
  insert,
  update,
  remove,
  findUserByUsername,
};

function find() {
  // query to return all properties of the user object except for the password
  return db("users").select(["id", "username", "role"]);
}

function insert(user) {
  return db("users").insert(user);
}

function update(id, changes) {
  return db("users").where({ id }).insert(changes);
}

function remove(id) {
  return db("users").where({ id }).del();
}

function findUserByUsername(username) {
  return db("users").where({ username }).first(); //first(): it will stop at the first one it finds
}
