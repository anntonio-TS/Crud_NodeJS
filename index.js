import Express from "express";
import { conectar } from "./modelo/db_conectar.js";
const app_e = express();
app_e.use(express.static('./vista'))
app_e.use(express.static('./modelo'))
app_e.use(express.static(`./controlador`))
//motor de vistas 
app_e.set('views','./vista')
app_e.set('view engine','ejs')
app_e.listen(`5000`,function(){
    console.log('Aplicacion iniciada en: http://localhost:5000')
})
app_e.get(`/`,function(req,res){
    conectar.query('select * from clientes',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.render('clientes/index')
        }
    })
    res.render('clientes/index',{resultado:results})
})