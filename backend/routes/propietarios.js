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


router.post('/usuarios', (req,res) => {
    console.log(req.body)
    const {codigo_propietario,nombre_usuario,correo,contraseña,perfil}=req.body;

    let user =[codigo_propietario,nombre_usuario,correo,contraseña,perfil];

    let query = `INSERT INTO tbl_propietario(codigo_propietario,nombre_usuario,correo,contraseña,perfil)
    VALUES(?,?,?,?,?)`
    mysqlConnection.query(query, user, (err, results) => {
        if(err){
            console.log(err)
        }
        return res.json({message:"user has been created"})
    })
})


module.exports=router;