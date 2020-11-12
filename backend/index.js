
const express= require('express');
const app = express();
const cultivo= require('./routes/cultivo');
const planta= require('./routes/planta');

//ajustes
app.set('port',3000)


// Middleware
app.use(express.json());


// ajustess
app.use('/api/cultivo',cultivo);
app.use('/api/planta',planta);



app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 