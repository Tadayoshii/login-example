// @TODO Wenn die Applikation wächst anstatt eine direkte Verbindung 
// mit MySQL aufzubauen lieber ein ORM benutzen!
const mysql = require('mysql')
const config = require('config')

var connection = mysql.createConnection({
  host: config.get('Database.host'),
  port: config.get('Database.port'),
  user: config.get('Database.username'),
  password: config.get('Database.password'),
  database: config.get('Database.database')
})

connection.connect(function (err) {
  if (err) throw err
})

module.exports = connection
