const express = require('express');
const router = express.Router();

router.get('/group', (req, res) => {
  res.json({ text: 'Hello from backend!' });
});

module.exports = router;