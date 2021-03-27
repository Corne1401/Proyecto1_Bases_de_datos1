let express = require('express');
let cors = require("cors");
const bodyParser= require('body-parser');
let sql = require("mssql");
let app = express();

app.use(cors());
app.use(bodyParser.json());

let config = {
        user: 'admin',
        password: 'Proyecto-BD-1',
        server: 'planillaobrera.cazk1jfc5xpu.us-east-2.rds.amazonaws.com', 
        database: 'tarea_programada' 
    };
let port = 5000;

app.listen(port, function () {
    console.log(`Server is running in port ${port}`);
});

// Gets--------------------------------------------------------

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

// Post--------------------------------------------------------

