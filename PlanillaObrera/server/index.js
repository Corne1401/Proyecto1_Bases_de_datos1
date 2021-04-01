const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require('./database/database.service');
const app = express();

const errorHandler = require('./_helpers/error-handler');
const basicAuth = require('./_helpers/auth');

//Configurations ----------------------------------------------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(basicAuth);
app.use('/users', require('./users/users.controller'));
app.use(errorHandler);

let port = 5000;

app.listen(port, function () {
    console.log(`Server is running in port ${port}`);
});

// Gets--------------------------------------------------------

// app.get('/', async (req, res) => {
//     console.log(urs.users);
//     res.send('API working');
// })

app.get('/getAllDepartments', async (req, res) => {
    await sql.connect(config);
    const result = await sql.query('select * from dbo.Department');
    res.send(result.recordset);
})

app.get('/getAllJobs', async (req, res) => {
    await sql.connect(config);
    const result = await sql.query('select * from dbo.Job');
    res.send(result.recordset);
})

app.get('/getAllAdministrators', async (req, res) =>{
    await sql.connect(config);
    const result = await sql.query('select * from dbo.Administrators');
    res.send(result.recordset);
})

// Post--------------------------------------------------------

