
module.exports.insertVideos = function (application, req, res) {
    var fs = require('fs');
    var date = new Date();
    timeStamp = date.getTime();

    //    var urlVideo = timeStamp + '-' + req.files.arquivo.originalFilename;

    // var pathOrigem = req.files.arquivo.path;
    //  var pathDestino = '../../uploads/videos' + urlVideo;

    if (req.files) {
        console.log(req.files.filename);
    }



}