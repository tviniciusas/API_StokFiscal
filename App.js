const express = require('express');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;
const routes = require('./src/routes/routes');
var cors = require('cors');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded ({limit: '50mb'}, {extended: true}));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

