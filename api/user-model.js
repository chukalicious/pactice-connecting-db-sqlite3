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
  return db("users");
}

function insert(user) {
  return db("users").insert(user);
}

function update(changes, id) {
  return db("users").where({ id }).insert(changes);
}

function remove(id) {
  return db("users").where({ id }).del();
}

function findUserByUsername(username) {
  return db("users").where({ username }).first(); //first(): it will stop at the first one it finds
}
