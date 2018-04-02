const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.listen(4000, ()=> console.log('listening on port 4000'))