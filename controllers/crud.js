const conexion = require('../database/db');

exports.save=(req,res) =>{
    const nombre = req.body.nombre;
    const detalles = req.body.detalles;
    conexion.query('INSERT INTO maestro SET ?',{nom:nombre,det:detalles},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

exports.update=(req,res) =>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const detalles = req.body.detalles;
    conexion.query('UPDATE maestro SET ? WHERE id = ?',[{nom:nombre,det:detalles},id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}