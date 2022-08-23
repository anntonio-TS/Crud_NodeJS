import mysql from 'mysql'
var conectar = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'hola',
    database : 'db_empresa'
});
conectar.connect( function(error){
    if(error){
        console.error('Error en la Conexion' + error.stack)
        return;
    }
    console.log('Conexion Exitosa ID:' + conectar.threadId);
});
export {conectar}