module.exports = function(app) {
  var express = require('express');
  var articlesRouter = express.Router();

  articlesRouter.get('/', function(req, res) {
    res.send({
      'articles': []
    });
  });

  articlesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  articlesRouter.get('/:74', function(req, res) {
    res.send({
      'article': {
        id: 74,
        created_at: "2014-11-03T21:30:47.869Z",
        description: "foo",
        state: "borrowed",
        notes: "bar",
        friend_id: 153
      }
    });
  });

  articlesRouter.put('/:id', function(req, res) {
    res.send({
      'articles': {
        id: req.params.id
      }
    });
  });

  articlesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/articles', articlesRouter);
};
