const { Ebooks } = require("../models/ebooks");

const apiController = {
  async apiList(req, res) {
    const list = await Ebooks.find();
    res.json(list);
  },

 
  async apiCrearProducto(req, res) {
    try {
      const nuevoProducto = new Ebooks(req.body);
      await nuevoProducto.save();
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async apiPut(req, res) {
    await Ebooks.findByIdAndUpdate(req.params.id, req.body);
    const resultado = await Ebooks.findById(req.params.id);
    res.status(201).json(resultado);
  },
  
  async apiDelete(req, res) {
    await Ebooks.findByIdAndDelete(req.params.id)
    res.status(200).json({
      msg: "El objeto con el id " + req.params.id + " fue borrado correctamente"
        })
  }
};

module.exports = apiController;
