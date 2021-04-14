const sql = require('mssql')

module.exports = {
    getAllAdministrators,
    insertJob,
    insertDepartment,
    insertIdentityDocumentType,
    insertEmployee,
}

let config = {
    user: 'admin',
    password: 'Proyecto-BD-1',
    server: 'planillaobrera.cazk1jfc5xpu.us-east-2.rds.amazonaws.com', 
    database: 'tarea_programada' 
};

async function getAllAdministrators(req, res,next){
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



function insertJob(Id, Namejob, SalaryXHour){
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function(conn) {
      var request = new sql.Request(conn);
      request.input('Id', sql.Int,Id);
      request.input('NameJob', sql.VarChar(256), Namejob);
      request.input('SalaryXHour', sql.Int, SalaryXHour);
      request.input('Active', sql.Bit, 1);
      request.execute('dbo.spJobs_InsertJob').
      then(function(err, recordsets, returnValue, affected) {
        console.dir(recordsets);
        console.dir(err);
      }).catch(function(err) {
        console.log(err);
      });
    });      
}

function insertDepartment(Id, Name){
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function(conn) {
      var request = new sql.Request(conn);
      request.input('Id', sql.Int,Id);
      request.input('Name', sql.VarChar(128), Name);
      request.execute('dbo.spDepartment_InsertDepartment').
      then(function(err, recordsets, returnValue, affected) {
        console.dir(recordsets);
        console.dir(err);
      }).catch(function(err) {
        console.log(err);
      });
    });      
}

function insertIdentityDocumentType(Id, Name){
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function(conn) {
      var request = new sql.Request(conn);
      request.input('Id', sql.Int,Id);
      request.input('Name', sql.VarChar(128), Name);
      request.execute('dbo.spIdentityDocumentType_InsertDocumentType').
      then(function(err, recordsets, returnValue, affected) {
        console.dir(recordsets);
        console.dir(err);
      }).catch(function(err) {
        console.log(err);
      });
    });      
}

function insertEmployee(Id, Name, ValueDocumentId,IdDepartment, JobName, BirthDay){
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function(conn) {
      var request = new sql.Request(conn);
      request.input('Id', sql.Int,Id);
      request.input('Name', sql.VarChar(128), Name);
      request.input('ValueDocumentId', sql.Int, ValueDocumentId);
      request.input('IdDepartment', sql.Int, IdDepartment);
      request.input('JobName', sql.VarChar(256), JobName);
      request.input('BirthDay', sql.Date, BirthDay);
      request.input('Active', sql.Bit, 1);
      request.execute('dbo.spEmployee_InsertEmployee').
      then(function(err, recordsets, returnValue, affected) {
        console.dir(recordsets);
        console.dir(err);
      }).catch(function(err) {
        console.log(err);
      });
    });      
}
