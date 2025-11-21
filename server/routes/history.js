const express = require('express');
const router = express.Router();
const analyzer = require('../services/analyzer');
const config = require('../config');
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(config.HISTORY_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(JSON.parse(data || '[]'));
  });
});

router.get('/analyze', (req, res) => {
  fs.readFile(config.HISTORY_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    const history = JSON.parse(data || '[]');
    const stats = analyzer.analyze(history);
    res.json(stats);
  });
});

module.exports = router;
