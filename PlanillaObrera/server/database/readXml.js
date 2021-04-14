
module.exports = {readCatalogs, readNonCatalogs}

const path = require('path');
var database = require('./database.service');

var dom = require('xmldom').DOMParser,
    fs = require('fs');

var xml2js = require('xml2js');
var xpath = require("xml2js-xpath");

function readCatalogs(){

  let xmlFile = fs.readFileSync(path.resolve('server/Catalogos-NoCatalogos/','catalogos.xml'), 'utf8').toString();
  var parser = new xml2js.Parser();
  parser.parseString(xmlFile, function(err,result){
  
    for(var key in result['Catalogos']['Tipos_de_Documento_de_Identidad'][0]['TipoDocuIdentidad'] ){
      var name = result['Catalogos']['Tipos_de_Documento_de_Identidad'][0]['TipoDocuIdentidad'][key].$.Nombre;
      var Id = result['Catalogos']['Tipos_de_Documento_de_Identidad'][0]['TipoDocuIdentidad'][key].$.Id;
      //database.insertIdentityDocumentType(Id,name);
    }
    for(var key in result['Catalogos']['Puestos'][0]['Puesto'] ){
      var Id = result['Catalogos']['Puestos'][0]['Puesto'][key].$.Id;
      var name = result['Catalogos']['Puestos'][0]['Puesto'][key].$.Nombre;
      var salary = result['Catalogos']['Puestos'][0]['Puesto'][key].$.SalarioXHora;
      //database.insertJob(Id,name,salary);
  }
    for(var key in result['Catalogos']['Departamentos'][0]['Departamento'] ){
      var name = result['Catalogos']['Departamentos'][0]['Departamento'][key].$.Nombre;
      var Id = result['Catalogos']['Departamentos'][0]['Departamento'][key].$.Id;
      //database.insertDepartment(Id,name);
    }
    
  });


}

function readNonCatalogs(){

  let xmlFile = fs.readFileSync(path.resolve('server/Catalogos-NoCatalogos/','no-catalogos.xml'), 'utf8').toString();
  var parser = new xml2js.Parser();
  parser.parseString(xmlFile, function(err,result){
    
      for(var key in result['Empleados']['Empleado'][0]['Nombre'] ){
      var name = result['Empleados']['Empleado'][0]['Nombre'][key].$.Nombre;
      var Id = result['Empleados']['Empleado'][0]['Nombre'][key].$.Id;
      var ValueDocumentId = result['Empleados']['Empleado'][0]['Nombre'][key].$.ValorDocumentoIdentificacion;
      var IdDepartment = result['Empleados']['Empleado'][0]['Nombre'][key].$.IdDepartamento;
      var JobName = result['Empleados']['Empleado'][0]['Nombre'][key].$.Puesto;
      var BirthDay = result['Empleados']['Empleado'][0]['Nombre'][key].$.FechaNacimiento;
      console.log(BirthDay);
      database.insertEmployee(Id,name,ValueDocumentId,IdDepartment,JobName,BirthDay);
      }
    });

}