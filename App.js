const express = require('express');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT;
const routes = require('./src/routes/routes');
var cors = require('cors');

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.header('X-Requested-With', 'XMLHttpRequest');
    app.use(cors());
    next();
});

app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

