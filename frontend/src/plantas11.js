import React from 'react';
import './plantas11.css';
import {Link} from 'react-router-dom';

function plantas11 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas11'>

<div className='volverpl11'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl11'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl11'>

<img src = 'menta.png' width='80px' height='80px'/>

</div>

<div className='flecha2pl11'>

<Link to='/plantas10'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl11'>

<h4>Menta</h4>

</div>

<div className='titulo3pl11'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-11'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-11'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-11'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl11'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl11'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl11'>

<h4>Brocoli</h4>

</div>

<div className='ingpl11'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl11'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas11;