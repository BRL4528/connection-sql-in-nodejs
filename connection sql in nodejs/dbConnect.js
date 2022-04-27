var sql = require('mssql/msnodesqlv8');
var dbConfig = require('./dbConfig');
var dbConnect = new sql.connect(dbConfig, function (err) {
  if (err) {
    console.log('Erro ao conectar banco de dados: ' + err);
  } else {
    console.log('connected to database: ' + dbConfig.servidor);
  }
});
module.exports = dbConnect;
