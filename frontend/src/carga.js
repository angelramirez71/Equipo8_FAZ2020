import React from 'react';
import './carga.css';
import {Link} from 'react-router-dom';

function carga () {

document.body.style = "background: white;";

return(

<div className='carga'>

<div className='logocarga'>

<img src='Logohydro.png' alt='.' width='300px' height='300px'/>

</div>

<div className='ingcarga'>

<button type="button" class="btn btn-success btn-lg"><Link to='/principal'className='ingcarga'>Ingresar</Link></button>

</div>

</div>
);
}

export default carga;