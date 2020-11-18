import React from 'react';
import './plantas9.css';
import {Link} from 'react-router-dom';

function plantas9 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas9'>

<div className='volverpl9'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl9'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl9'>

<img src = 'jengibre.png' width='80px' height='80px'/>

</div>

<div className='flechapl9'>

<Link to='/plantas10'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl9'>

<Link to='/plantas8'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl9'>

<h4>Jengibre</h4>

</div>

<div className='titulo3pl9'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-9'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-9'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-9'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl9'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl9'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl9'>

<h4>Brocoli</h4>

</div>

<div className='ingpl9'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl9'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas9;