const router = express.Router();

router.param('user_id', (req, res, next, id) => {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id,
    name: 'TJ',
  };
  next();
});

router
  .route('/users/:user_id')
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get((req, res, next) => {
    res.json(req.user);
  })
  .put((req, res, next) => {
    // just an example of maybe updating the user
    req.user.name = req.params.name;
    // save user ... etc
    res.json(req.user);
  })
  .post((req, res, next) => {
    next(new Error('not implemented'));
  })
  .delete((req, res, next) => {
    next(new Error('not implemented'));
  });