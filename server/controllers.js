const mods = require('./mods.js');

module.exports = {

  getAll: (req, res) => {
    console.log("Path controllers getAll success!");
    mods.getBooks(req.query).then((data) => {
      res.status(200).json(data.rows);
    });
  },

  postBook: (req, res) => {
    console.log("path controller postBook success!");
    mods.postBook(req.body).then((data) => {
      res.status(201).end();
    });
  },

  putRead: (req, res) => {
    mods.putRead(req).then((data) => {
      res.status(204).end();
    });
  },

  putNote: (req, res) => {
    mods.putNote(req).then((data) => {
      res.status(204).end();
    });
  }
}