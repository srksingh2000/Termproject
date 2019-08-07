const http = require('http');
const site = http.CreateServer(function(req, res) {
    console.log('hello world');
    res.write("yeah Go HTTP!");
    res.setHeader("WhaT SHOULD I DO HERE??");

});
site.listen(3000);