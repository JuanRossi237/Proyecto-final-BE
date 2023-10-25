const {check} = require("express-validator");

const checks = [
  check("titulo")
    .notEmpty()
    .withMessage("El campo título es obligatorio")
    .isString()
    .withMessage("El campo título debe ser de tipo string"),
  check("editorial")
    .notEmpty()
    .withMessage("El campo editorial es obligatorio")
    .isString()
    .withMessage("El campo editorial debe ser de tipo string"),
  check("isbn")
    .notEmpty()
    .withMessage("El campo isbn es obligatorio")
    .isString()
    .withMessage("El campo isbn debe ser de tipo number"),  
  check("price")
    .notEmpty()
    .withMessage("El campo price es obligatorio")
    .isString()
    .withMessage("El campo price debe ser de tipo number"),
  check("stock")
    .notEmpty()
    .withMessage("El campo stock es obligatorio")
    .isString()
    .withMessage("El campo stock debe ser de tipo number"),
];

module.exports = checks