import React from 'react';
import './plantas4.css';
import {Link} from 'react-router-dom';

function plantas4 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas4'>

<div className='volverpl4'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl4'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl4'>

<img src = 'fresa.png' width='80px' height='80px'/>

</div>

<div className='flechapl4'>

<Link to='/plantas5'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl4'>

<Link to='/plantas3'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl4'>

<h4>Fresa</h4>

</div>

<div className='titulo3pl4'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-4'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-4'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-4'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl4'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl4'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl4'>

<h4>Brocoli</h4>

</div>

<div className='ingpl4'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl4'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas4;