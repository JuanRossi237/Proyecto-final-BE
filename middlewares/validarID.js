const { Ebooks } = require("../models/ebooks");

const validarID = async (req, res, next) => {
  try {
    const busqueda = await Ebooks.findById(req.params.id);
    if (busqueda !== null) {
      next();
    } else {
      res.status(400).json({
        msg: "El id ingresado " + req.params.id + " es inválido",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {validarID};
