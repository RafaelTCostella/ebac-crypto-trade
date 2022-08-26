const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({
    sucesso: true,
    status: 'ok',
  });
});

module.exports = router;
