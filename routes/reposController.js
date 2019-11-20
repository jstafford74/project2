const express = require('express');

const router = express.Router();

// Import the model (repomaster.js) to use its database functions.
const repo = require('../models/repomaster.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  repo.all(function(data) {
    const hbsObject = {
      repos: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/repos', function(req, res) {
  repo.create(
      ['name', 'starred'],
      [req.body.name, '0'],
      function(result) {
        // Send back the ID of the new quote
        res.json({id: result.insertId});
      });
});

router.put('/api/repos/:id', function(req, res) {
  const condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  repo.update(
      {
        starred: req.body.starred,
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      },
  );
});

router.delete('/api/repos/:id', function(req, res) {
  const condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  repo.delete(
      condition,
      function(result) {
        if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      },
  );
});

// Export routes for server.js to use.
module.exports = router;
