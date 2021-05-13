const express = require('express');
const cors = require('cors');
require('./config/db');
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use('/', express.static('./client/build'));

const port = 3050;
app.listen(port, () => {});

exports.app = app;
