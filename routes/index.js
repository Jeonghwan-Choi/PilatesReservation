// routes/index.js
module.exports = function (app) {
  const sql = require('mssql');
  var config = {
    user: 'pswel1',
    password: '1234',
    server: '221.154.8.88',
    database: 'Techon',
    options: { encrypt: false }
  };
  sql.connect(config).then(pool => {
    app.get('/api/users', function (req, res) {
      return pool.request()
        .query('select * from equipment')
        .then(result => {
          res.json(result.recordset);
          res.end();
        });
    });
  });

}