import React from 'react';
import './recupera.css';
import {Link} from 'react-router-dom';

function recupera(){

return(
<div className='recupera'>

<div className='volverrecupera'>

<Link to='/login'className='volverrecupera'>Volver</Link>

</div>

<div className='titulorecupera'>

<center><h2>RECUPERA TU CONTRASEÑA</h2></center>

</div>

<div className='logorecupera'>

<center><img src='Logohydro.png' width='250px' height='250px'></img></center>

</div>

<div className='titulorecupera2'>

<center><h5>Ingresa tu correo electrónico</h5></center>

</div>

<div className='inputrecupera'>

<center><input type='mail'></input></center>

</div>
<div className='aceptarrecupera'>

<center>    <button type="button" class="btn btn-success btn-lg"><Link to='/notirec'className='aceptarrecupera'>Aceptar</Link></button>
</center>

</div>

</div>
);

}

export default recupera;