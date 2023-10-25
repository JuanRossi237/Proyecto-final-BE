const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");
const { validarID } = require("../middlewares/validarID");
const checks = require ("../middlewares/checks")
const {validarChecks} = require ("../middlewares/validarChecks")


/* métodos http - URN o expresión - middlewares - callback */
router.post("/crear", checks, validarChecks, apiController.apiCrearProducto);
router.get("/list", apiController.apiList);
router.put("/editar/:id",validarID, apiController.apiPut);
router.delete("/eliminar/:id",validarID, apiController.apiDelete);




module.exports = router;
