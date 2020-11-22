const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');

// traer todos los cultivos almacenados
router.get('/cultivos',(req,res)=>{
    mysqlConnection.query('SELECT * from tbl_cultivo',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

// los otros

router.post('/nuevo_cultivo',(req,res)=>{
const {nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id}=req.body;

let alumno =[nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id];

let nuevoAlumno =`INSERT INTO actores(nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id)
VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
if(err){
   return console.error(err.mess

module.exports=router;