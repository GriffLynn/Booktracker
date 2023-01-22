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

    const id = req.params.id;
    const read = req.body.read;

    let query =
    `UPDATE
      books
    SET
      read = '${read}'
    WHERE
      id = ${id}`;

    return db.pool.query(query);
  },

  putDetails: (req, res) => {
    console.log("models.putDetails success!");

    const id = req.params.id;
    const note = req.body.note;
    const title = req.body.title;

    let query =
    `UPDATE
      books
    SET
      title = ${title},
      note = '${note}'
    WHERE
      id = ${id}`;

    return db.pool.query(query);
  },

  deleteBook: (req, res) => {
    console.log("models.deleteBook success!");

    const id = req.params.id;

    let query =
    `DELETE
     FROM
       books
     WHERE
       id = ${id}`;

    return db.pool.query(query);
  }


}