import React from 'react';
import './notirec.css';
import {Link} from 'react-router-dom';

function notirec(){
return(
<div className='notirec'>
    <div className='textonoti'>

        <p>¡Te hemos enviado un correo electrónico con tu contraseña, 
            por favor dirigete a tu bandeja de entrada!</p>

    </div>
    <div className='imagennoti'>

        <center><img src='Logohydro.png' width='250px' height='250px'/></center>
    </div>

    <div className='botonnoti'>

    <center><button type="button" class="btn btn-secondary btn-lg"><Link to='/login' className='botonnoti'>Aceptar</Link></button></center>
</div>
</div>

);

}

export default notirec;