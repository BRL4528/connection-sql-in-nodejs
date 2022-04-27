// var dbConnect = require('./dbConnect');
const sql = require('msnodesqlv8');

const connectionString =
  'server=192.168.1.12;Database=COOASGO_DW;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';
const query = 'SELECT * FROM View_RateioDespesaDocumento';

sql.query(connectionString, query, (err, rows) => {
  console.log(rows);
});

const sql = require('mssql');

async function connectData() {
  await sql.connect('server=192.168.1.12;Database=COOASGO_DW');
  const result = await sql.query`SELECT * FROM View_BICRMPerfil`;
  console.log('resultado', result);
}

connectData();
