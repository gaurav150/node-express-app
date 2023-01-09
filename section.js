const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get route on app.js');
});

router.post('/', (req, res) => {
  res.send('Post route on app.js');
});

// Export this to use in our app.js

module.exports = router;