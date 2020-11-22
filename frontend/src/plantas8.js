import React from 'react';
import './plantas8.css';
import {Link} from 'react-router-dom';

function plantas8 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas8'>

<div className='volverpl8'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl8'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl8'>

<Link to='/interactua'><img src = 'oregano.png' width='80px' height='80px'/></Link>

</div>

<div className='flechapl8'>

<Link to='/plantas9'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl8'>

<Link to='/plantas7'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl8'>

<h4>Oregano</h4>

</div>

<div className='titulo3pl8'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-8'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-8'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-8'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl8'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl8'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl8'>

<h4>Brocoli</h4>

</div>

<div className='ingpl8'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl8'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas8;