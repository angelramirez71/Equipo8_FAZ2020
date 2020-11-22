import React from 'react';
import './plantas3.css';
import {Link} from 'react-router-dom';

function plantas3 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas3'>

<div className='volverpl3'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl3'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl3'>

<Link to='/interactua'><img src = 'brocoli.png' width='80px' height='80px'/></Link>

</div>

<div className='flechapl3'>

<Link to='/plantas4'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl3'>

<Link to='/plantas'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl3'>

<h4>Brócoli</h4>

</div>

<div className='titulo3pl3'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-3'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-3'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-3'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl3'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl3'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl3'>

<h4>Brocoli</h4>

</div>

<div className='ingpl3'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl3'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas3;