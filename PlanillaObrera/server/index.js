const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const { ESRCH } = require('constants');
const app = express();

let user = 'Admin';
let password = 'Corne01214!';
let dbConnString = `mssql://${user}:${password}@localhost/Traning`;

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
})