//Recebendo Arquivos via form-data
module.exports.insertVideos = function (application, req, res) {
    
var path = require('path'),
    os = require('os'),
    fs = require('fs');
var Busboy = require('busboy');
var busboy = new Busboy({ headers: req.headers });


busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

  console.log('Chega aqui!!!!');

  var saveTo = path.join('uploads', path.basename(fieldname)+'.mp4');

  console.log(saveTo);

  file.pipe(fs.createWriteStream(saveTo));
});

busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
  console.log('Field [' + fieldname + ']: value: ' + inspect(val));
});


busboy.on('finish', function() {
  res.writeHead(200, { 'Connection': 'close' });
  res.end("That's all folks!!");
});


return req.pipe(busboy);
  
}

module.exports.sendVideos =  function (application, req, res) {

var path = require('path'),
    os = require('os'),
    fs = require('fs');
    console.log('aqqui videos');

    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    var rs = fs.createReadStream('uploads/file.mp4');  
    rs.pipe(res);

}