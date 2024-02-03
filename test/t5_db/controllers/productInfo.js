const express = require("express");
const db = require("../util/sqlUtil");
const router = express.Router();

router.get('/:name', (req, res, next) => {
  let pName = req.params.name.split('_').join(' ');
  let query = `select * from Products where name = "${pName}";`
  db.query(query).then(([results, fields]) => {
    res.json(results);
  }).catch(err => console.log(err));
});

module.exports = router;
