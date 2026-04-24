const express = require('express');
const router = express.Router();

router.get('/message', (req, res) => {
  res.json({ text: 'Hello from backend!' });
});

module.exports = router;