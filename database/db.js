const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: '4crps0mflwcbon44m4w6',
    password:'pscale_pw_CgXBn9xlesq3vMgorLOCQHZ0JViROi2fnnUSwVn9mmL',
    database: 'mtro',
    ssl : true
});

conexion.connect((error)=>{
    if(error){
        console.error('El error es' + error);
        return
    }
    console.log("Se a conectado la base de datos");
});

module.exports = conexion;