const sql = require('mssql')

module.exports = {
    getAllAdministrators,
}

let config = {
    user: 'admin',
    password: 'Proyecto-BD-1',
    server: 'planillaobrera.cazk1jfc5xpu.us-east-2.rds.amazonaws.com', 
    database: 'tarea_programada' 
};

async function getAllAdministrators(){
    await sql.connect(config);
    const result = await sql.query(`select * from dbo.Administrators`);
    //console.log(result.recordset);
    return result.recordset;
}

