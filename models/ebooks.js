const { Schema, model } = require("mongoose");

const schema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  editorial: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
  },
});

const Ebooks = model("Ebooks", schema);
module.exports = { Ebooks };
