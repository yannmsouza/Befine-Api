/* importar o mongodb */

var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/befine-api")
    .then(conn => global.conn = conn.db("befine"))
    .catch(err => console.log(err));


module.exports = { }