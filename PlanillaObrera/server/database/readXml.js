
module.exports = {readCatalogs}

const path = require('path');
var database = require('./database.service');

var dom = require('xmldom').DOMParser,
    fs = require('fs');

var xml2js = require('xml2js');
var xpath = require("xml2js-xpath");

function readCatalogs(){
  let xmlFile = fs.readFileSync(path.resolve('server/Catalogos-NoCatalogos/','Catalogo_con_ID_BD.xml'), 'utf8').toString();
  var parser = new xml2js.Parser();
  parser.parseString(xmlFile, function(err,result){
  
    for(var key in result['Datos']['Catalogos'][0]['Tipos_de_Documento_de_Identificacion'][0]['TipoIdDoc']){
      var name = result['Datos']['Catalogos'][0]['Tipos_de_Documento_de_Identificacion'][0]['TipoIdDoc'][key].$.Nombre;
      var Id = result['Datos']['Catalogos'][0]['Tipos_de_Documento_de_Identificacion'][0]['TipoIdDoc'][key].$.Id;
      database.insertIdentityDocumentType(Id,name);
    }
    
    for(var key in result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'] ){
      var Id = result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'][key].$.Id;
      var name = result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'][key].$.Nombre;
      var salary = result['Datos']['Catalogos'][0]['Puestos'][0]['Puesto'][key].$.SalarioXHora;
      database.insertJob(Id,name,salary);
  }
    for(var key in result['Datos']['Catalogos'][0]['Departamentos'][0]['Departamento'] ){
      var name = result['Datos']['Catalogos'][0]['Departamentos'][0]['Departamento'][key].$.Nombre;
      var Id = result['Datos']['Catalogos'][0]['Departamentos'][0]['Departamento'][key].$.Id;
      database.insertDepartment(Id,name);
    }
    
    for(var key in result['Datos']['Empleados'][0]['Empleado']){
      var name = result['Datos']['Empleados'][0]['Empleado'][key].$.Nombre;
      var IdTypeDoc = result['Datos']['Empleados'][0]['Empleado'][key].$.idTipoDocumentacionIdentidad;
      var ValueDocType = result['Datos']['Empleados'][0]['Empleado'][key].$.ValorDocumentoIdentidad;
      var IdDepartment = result['Datos']['Empleados'][0]['Empleado'][key].$.IdDepartamento;
      var IdJob = result['Datos']['Empleados'][0]['Empleado'][key].$.idPuesto;
      var BirthDay = result['Datos']['Empleados'][0]['Empleado'][key].$.FechaNacimiento;
  
      database.insertEmployee(name,IdTypeDoc,ValueDocType,IdDepartment,IdJob,BirthDay); 
    }
    for(var key in result['Datos']['Usuarios'][0]['Usuario']){
      var username = result['Datos']['Usuarios'][0]['Usuario'][key].$.username;
      var pwd = result['Datos']['Usuarios'][0]['Usuario'][key].$.pwd;
      var type = result['Datos']['Usuarios'][0]['Usuario'][key].$.tipo;
      database.insertUser(username, pwd); 
    }
    
  });


}
