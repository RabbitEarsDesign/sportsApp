const express = require("express");
const router = express.Router();

// @route  GET api/stats
// @desc   Get players
// @access Public
router.get("/", (req, res) => {
  console.log(res);
  res.send("stats route");
});

module.exports = router;
