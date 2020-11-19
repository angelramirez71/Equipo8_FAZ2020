
const express= require('express');
const app = express();
const cors = require('cors')

const cultivo= require('./routes/cultivo');
const planta= require('./routes/planta');
const propietarios= require('./routes/propietarios');
const sensor= require('./routes/sensor');


//ajustes
app.set('port',3000)


// Middleware
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());


// ajustess
app.use('/api',cultivo);
app.use('/api',planta);
app.use('/api',propietarios);
app.use('/api',sensor);

app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 