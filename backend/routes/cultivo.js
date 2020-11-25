const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');

// traer todos los cultivos almacenados
router.get('/cultivo',(req,res)=>{
    mysqlConnection.query('SELECT * from tbl_cultivo',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

// los otros

router.post('/nuevo_cultivo',(req,res)=>{
const {cod_cultivo,propietario,planta,humedad,hor_riegos}=req.body;

let tbl_cultivo =[cod_cultivo,propietario,planta,humedad,hor_riegos];

let nuevo_cultivo =`INSERT INTO actores(cod_cultivo,propietario,planta,humedad,hor_riegos)
VALUES(?,?,?,?,?)`;
mysqlConnection.query(nuevo_cultivo(err,results,fields)=>{
if(err){
   return console.error(err.mess

module.exports=router;