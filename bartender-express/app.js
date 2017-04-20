const express = require('express'),
      app = express(),
      cors = require('cors'),
      pgPromise = require('pg-promise'),
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(require('./router'));

const PORT = process.env.PORT || 9000;

app.listen(PORT , () => {
    console.log(`bitch betta get that money on ${PORT}`);
});
