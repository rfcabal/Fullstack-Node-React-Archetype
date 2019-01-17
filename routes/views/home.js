const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola esta es la ruta principal");
});

module.exports = router;
