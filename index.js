/**
 * Created by Sunshine on 2016/8/1.
 */
var express = require('express');
var app = express();
const BarcodeToPostcode = require('./src/core/BarcodeToPostcode.js');
const PostcodeToBarcode = require('./src/core/PostcodeToBarcode.js');

app.get('/index.js', function (req, res) {
    let result = new PostcodeToBarcode().printBarcode( req.query.postcode);
    res.send(result);
});
app.get('/index1.js', function (req, res) {
    console.log(req.query.barcode);
    let result = new BarcodeToPostcode().printPostCode(req.query.barcode);
    res.send(result);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
