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
      note)
    VALUES
      ($1,
      $2,
      $3)`;

    const data = [ title, note, read ];

    return db.pool.query(query, data);
  },

  postRead: (req) => {
    console.log("models.postRead success!");
    const { title, note, read } = req;

    let query =
    `UPDATE
      books
    SET
      read = ${read}
    WHERE
      title = ${title}`;

    const data = [ title, note, data ];

    return db.pool.query(query, data);
  }


}