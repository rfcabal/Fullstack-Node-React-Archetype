const express = require('express');
const router = express.Router();

router.get("*", (req, res) => {
  res.send("Route is not defined.");
});

module.exports = router;
