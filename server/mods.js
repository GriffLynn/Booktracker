const db = require('./db.js');

module.exports = {

  getBooks: (req) => {
    console.log("models.getBooks success!");
    let query = `SELECT * from books`;

    return db.pool.query(query);
  },

  postBook: (req) => {
    console.log("models.postBook success!");
    const { title, note, read } = req;

    let query =
    `INSERT INTO
      books
      (title,
      note,
      read)
    VALUES
      ($1,
      $2,
      $3)`;

    const data = [ title, note, read ];

    return db.pool.query(query, data);
  },

  putRead: (req, res) => {
    console.log("models.putRead success!");

    const id = req;
    console.log("mods id:", id);

    let query =
    `UPDATE
      books
    SET
      read = 'yes'
    WHERE
      id = ${id}`;

    return db.pool.query(query);
  }


}