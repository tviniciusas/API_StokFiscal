var express = require('express');
var app = express();
require('dotenv/config');
var PORT = process.env.PORT;
var routes = require('./src/routes/routes');
var cors = require('cors');

app.use(express.json({ limit: '50mb' }));
app.use(routes);
app.listen(80, function () {
    console.log(process.env.PORT);
    console.log("Server is running on port ".concat(PORT));
});
