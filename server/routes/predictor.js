const express = require('express');
const router = express.Router();
const { predict } = require('../services/model');

router.post('/', (req, res) => {
  const { input } = req.body;
  try {
    const prediction = predict(input);
    res.json({ prediction });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
