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

//Administrators--------------------------------------

async function getAllAdministrators(){
    await sql.connect(config);
    const result = await sql.query(`select * from dbo.Administrator`);
    return result.recordset;
}
//Jobs------------------------------------------------
async function getAllJobs(){}

async function addNewJob(){}
async function removeJob(){}

/* could be one function (ask teacher) */
async function setJobName(){}
async function setJobSalary(){}





//Employees-------------------------------------------
async function getAllEmployees(){}

async function addNewEmployee(Id, Name, ValueDocumentId){}
async function removeEmployee(){}

async function setEmployeeName(){}
async function setEmployeeIdType(){}
async function setEmployeeValueDocumentId(){}
async function setEmployeeBirthDay(){}
async function setEmployeeJob(){}
async function setEmployeeIdDepartment(){}



