import React from 'react';
import './plantas10.css';
import {Link} from 'react-router-dom';

function plantas10 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas10'>

<div className='volverpl10'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl10'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl10'>

<Link to='/interactua'><img src = 'apio.png' width='80px' height='80px'/></Link>

</div>

<div className='flechapl10'>

<Link to='/plantas11'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl10'>

<Link to='/plantas9'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl10'>

<h4>Apio</h4>

</div>

<div className='titulo3pl10'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-10'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-10'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-10'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl10'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl10'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl10'>

<h4>Brocoli</h4>

</div>

<div className='ingpl10'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl10'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas10;