const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');

// traer todas las plantas almacenadas
router.get('/plantas',(req,res)=>{
    mysqlConnection.query('SELECT * from tbl_planta ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

// los otros

module.exports=router;