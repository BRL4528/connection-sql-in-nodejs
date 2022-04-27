var dbConfig = {
  server: '192.168.1.12',
  // port: 1433,
  database: 'COOASGO_DW',
  driver: 'SQL Server Native Client 11.0',
  options: {
    trustedConnection: true,
  },
};
module.export = dbConfig;
