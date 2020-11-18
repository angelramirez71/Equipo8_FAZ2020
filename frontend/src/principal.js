import React from 'react';
import './principal.css';
import {Link} from 'react-router-dom';

function principal () {

document.body.style = "background: white;";

return(

<div className='principal'>

<div className='logoprincipal'>

<img src='Logohydro.png' alt='.' width='300px' height='300px'/>

</div>

<div className='ingprincipal'>

<button type="button" class="btn btn-success btn-lg"><Link to='/login'className='ingprincipal'>Iniciar sesión</Link></button>

</div>

<div className='ingprincipal2'>

<button type="button" class="btn btn-success btn-lg"><Link to='/registro'className='ingprincipal2'>Registro</Link></button>

</div>

</div>
);
}

export default principal;