const express = require('express');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;
const routes = require('./src/routes/routes');

app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});