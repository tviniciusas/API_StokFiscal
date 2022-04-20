const { urlencoded } = require('express');
const express = require('express');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;
const routes = require('./src/routes');


app.use(express.json());
app.use(urlencoded ({extended: true}));
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});