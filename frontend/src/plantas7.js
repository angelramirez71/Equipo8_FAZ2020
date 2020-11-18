import React from 'react';
import './plantas7.css';
import {Link} from 'react-router-dom';

function plantas7 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas7'>

<div className='volverpl7'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl7'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl7'>

<img src = 'tomate.png' width='80px' height='80px'/>

</div>

<div className='flechapl7'>

<Link to='/plantas8'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl7'>

<Link to='/plantas6'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl7'>

<h4>Tomate</h4>

</div>

<div className='titulo3pl7'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-7'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-7'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-7'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl7'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl7'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl7'>

<h4>Brocoli</h4>

</div>

<div className='ingpl7'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl7'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas7;